const express = require('express'); //requiero el módulo exrpess en contante express
const path = require('path'); //requiero el módulo path en constante path

const PORT = process.env.PORT || 3000;

const publicFolderPath = path.resolve(__dirname, './public'); //resuleve la ruta de carpeta public, en equipo local, y la asigna a publicFolderPath


const app = express(); //se asigna la función express a la constante app
app.use(express.static(publicFolderPath)); //se utiliza la ruta declarada en publicFolderPath para publicar los archivos en el servidor
app.listen(PORT, ()=>{
    console.log('Started at http://localhost:3000'); //el servidor escucha en el puerto 3000
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html'); //el servidor obtiene el html del home en localhost/
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html'); //el servidor obtiene el html del login en localhost/login
});
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html'); //el servidor obtiene el html del registro en localhost/register
});