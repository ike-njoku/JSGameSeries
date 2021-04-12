// server to host application
const PORT = process.env.PORT || 1000;
const http = require('http');
const fileSystem = require('fs');
http.createServer(
    (request, response) => {
        const headers = {
            "Access-Control-Allow-Origin": "*",
        }


        try {
            if (request.url == "/") {
                response.writeHead(200, headers);
                response.end(
                    "welcome to the tetris game home page???"
                );
            }


            // loading the stylesheet
            if (request.url.includes("tetris.style.css")) {
                response.writeHead(200, headers);
                fileSystem.readFile("./static/tetris/tetris.style.css", (error, content) => {
                    if (error) response.end(error.message);
                    else response.end(content);
                })
            }

            // load the js file
            if (request.url.includes("tetris.app.js")) {
                response.writeHead(200, headers);

                fileSystem.readFile("./static/tetris/tetris.app.js", (error, content) => {
                    if (error) response.end(error.message);
                    else response.end(content);
                })
            }

            // load the html file
            if (request.url == "/tetris") {
                // set the response status and the header
                response.writeHead(200, {
                    "Content-Type": "text/html",
                    "Access-Control-Allow-Origin": "*",
                })

                fileSystem.readFile("./static/tetris/tetris.index.html", (error, content) => {
                    if (error) response.end(error.message);
                    else response.end(content);
                })

            }

        } catch (error) {

            response.end(error.message);

        }

    }
).listen(PORT, () => console.log(`Game server running on port: ${PORT}`));