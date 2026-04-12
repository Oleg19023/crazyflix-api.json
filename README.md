# Crazyflix API

Данный репозиторий содержит базу данных для проекта Crazyflix в формате JSON. 
Файл развернут через CDN jsDelivr для обеспечения высокой скорости доступа и поддержки CORS.

## 🔗 Прямая ссылка на API (Рекомендуется)
Используйте эту ссылку в своем приложении:

`https://cdn.jsdelivr.net/gh/Oleg19023/crazyflix-api.json@main/crazyflix-api.json`

## 🚀 Особенности
- **CORS настроен:** Доступ разрешен с любого домена (заголовок `Access-Control-Allow-Origin: *`).
- **Высокая скорость:** Благодаря CDN jsDelivr данные загружаются моментально.
- **Стабильность:** В отличие от бесплатных прокси (типа AllOrigins), эта ссылка работает без сбоев.

## 🛠 Как использовать

### JavaScript (fetch):
```javascript
fetch('https://cdn.jsdelivr.net/gh/Oleg19023/crazyflix-api.json@main/crazyflix-api.json')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Ошибка загрузки API:', err));
```

### Python:
```python
import requests
url = "https://cdn.jsdelivr.net/gh/Oleg19023/crazyflix-api.json@main/crazyflix-api.json"
data = requests.get(url).json()
print(data)
```

## ⚠️ Важное про обновление данных
CDN jsDelivr кэширует файлы. Если вы обновили JSON в этом репозитории, изменения могут появиться по основной ссылке в течение 24 часов.

Чтобы **мгновенно** получить обновленную версию, введите ссылку на json сюда для сброса кеша:
`https://www.jsdelivr.com/tools/purge`
