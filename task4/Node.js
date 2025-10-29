const http = require("http");
const router=require("./router/router")
const {port}=require("./data/data.js");
const app = http.createServer(router).listen(port,()=>{console.log(`Рабатает на порте${port}`)});
// Задание 4: Простой блог

// Создайте простое блог-приложение с следующими endpoint:

// · GET-МЕТОД С МАРШРУТОМ ВИДА /api/posts — получение списка всех постов

// · GET-МЕТОД С МАРШРУТОМ ВИДА /api/posts/123 — получение информации об отдельном посте по его id

// · POST-МЕТОД С МАРШРУТОМ ВИДА /api/posts — создание нового поста