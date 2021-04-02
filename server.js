// server to host application
const PORT = process.env.PORT || 1000;
const nodemon = require('nodemon')
const http = require('http');
http.createServer(
    (request, response) => {

        if (request.url == "/") response.end(
            "welcome to the tetris game home page???"
        );

        if (request.url == "/tetris-game") {
            response.writeHead(200).end(
                'app is working'
            )
        }
    }
).listen(PORT, () => console.log(`jsTetris is running on port ${PORT}`));