const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

// Ваша рабочая строка подключения к MongoDB Atlas
const uri = "mongodb+srv://olegmordan621_db_user:EfI1CPDf3LzgiAOV@crazyflix.diyjq4r.mongodb.net/";
const client = new MongoClient(uri);

// Разрешаем вашему сайту на GitHub Pages делать запросы (CORS)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Главная страница API
app.get('/', (req, res) => {
    res.json({ message: "Живое API CrazyFlix успешно работает на Render!" });
});

// Поиск фильмов по названию: /api/search?query=Гарри
app.get('/api/search', async (req, res) => {
    try {
        const db = client.db('crazyflix');
        const query = req.query.query;
        if (!query) return res.status(400).json({ error: "Параметр query пустой" });

        // Регистронезависимый поиск по частичному совпадению названия (title)
        const movies = await db.collection('movies')
            .find({ title: { $regex: query, $options: "i" } })
            .limit(20)
            .toArray();

        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Получение одного конкретного фильма по его ID: /api/movies/123
app.get('/api/movies/:id', async (req, res) => {
    try {
        const db = client.db('crazyflix');
        const idParam = req.params.id;
        
        // Пытаемся найти фильм сначала как число, затем как строку
        let movie = await db.collection('movies').findOne({ id: Number(idParam) });
        if (!movie) {
            movie = await db.collection('movies').findOne({ id: idParam });
        }
        
        if (!movie) return res.status(404).json({ error: "Фильм не найден" });
        res.json(movie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Запуск сервера и подключение к базе данных
async function start() {
    try {
        await client.connect();
        console.log("Успешно подключились к MongoDB Atlas напрямую!");
        app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
    } catch (e) {
        console.error("Ошибка подключения к базе:", e);
    }
}

start();
