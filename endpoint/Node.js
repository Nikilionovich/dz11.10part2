const http = require("http");
const router=require("./router/router")
const {port}=require("./data/data.js");
const app = http.createServer(router).listen(port,()=>{console.log(`Рабатает на порте${port}`)});
// Задание 1: Простой чат

// Создайте простое чат-приложение с следующими endpoint:

// · GET-МЕТОД С МАРШРУТОМ ВИДА /api/messages — получение всех сообщений

// · GET-МЕТОД С МАРШРУТОМ ВИДА /api/messages/username — получение всех сообщений от конкретного автора

// · POST-МЕТОД С МАРШРУТОМ ВИДА /api/messages — отправка нового сообщения от заданного пользователя