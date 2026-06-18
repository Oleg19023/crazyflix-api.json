# Crazyflix API

Данный репозиторий содержит базу данных для проекта Crazyflix в формате JSON. Файл развернут через **GitHub Pages**, что позволяет обходить лимиты CDN на файлы больше 20 МБ и обеспечивает высокую скорость доступа.

## 🔗 Прямая ссылка на API (Рекомендуется)

Используйте эту ссылку в своем приложении:

`https://oleg19023.github.io/crazyflix-api.json/crazyflix-api.json`

## 🚀 Особенности

* **Отсутствие лимитов**: Файл свободно отдается даже при весе > 20 МБ (в отличие от jsDelivr).
* **CORS настроен**: Доступ разрешен с любого домена.
* **Высокая скорость**: GitHub Pages использует собственную глобальную CDN-сеть.

## 🛠 Как использовать

**JavaScript (fetch):**
```javascript
fetch('https://oleg19023.github.io/crazyflix-api.json/crazyflix-api.json')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Ошибка загрузки API:', err));
