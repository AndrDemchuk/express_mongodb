# Express + MongoDB

Навчальний проєкт: основи Express.js (маршрути, параметри, middleware). Залежності `mongodb` та `mongoose` уже підключені для наступних кроків.

## Що зроблено

| Файл | Що демонструє |
|------|---------------|
| `app.js` | Мінімальний Express-сервер: маршрут `GET /` і запуск на порту 3000 |
| `routes-demo.js` | Базова маршрутизація: `GET /`, `GET /api`, `GET /api/tasks`, `GET /api/users` (відповіді JSON) |
| `params-demo.js` | Route-параметри та query-параметри (деталі нижче) |
| `custom-middleware.js` | Власний middleware `requestTimeMiddleware`: логує час запиту й додає його в `req.requestTime` |

### params-demo.js
- `GET /api/tasks?completed=true` — фільтрація за query-параметром (`req.query`). Без параметра або з будь-яким іншим значенням повертаються невиконані завдання.
- `GET /api/tasks/:id` — одне завдання за route-параметром (`req.params.id`), `404` з повідомленням, якщо його не знайдено.
- `GET /api/users/:id` — приклад route-параметра для користувача.

### custom-middleware.js
- `app.use(requestTimeMiddleware)` виконується для кожного запиту.
- `GET /` та `GET /api/status` повертають `requestTime` у JSON.

## Запуск

```bash
npm install
npm start      # node params-demo.js
npm run dev    # node --watch params-demo.js (автоперезапуск)
```

Будь-який інший файл запускається напряму, наприклад `node custom-middleware.js`. Усі приклади слухають `http://localhost:3000`, тому запускайте їх по одному.

## Стек
Node.js, Express 5, MongoDB driver, Mongoose.
