// Creating Server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
        < html lang = "en" >
        <head>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>CSS Display Property</title>

                        <link rel="stylesheet" href="css_display_property.css">
                            <style>
      /* Four types of diaplay's exists in css

                                1. Block
-> new line
-> by default full width
-> height and width can be set

                                2. Inline
-> not new line
-> by default no full width
-> height and width can not be set

                                3. Inline-Block
-> not new line
-> by default no full width
-> height and width can be set

                                4. None
-> this is used to hide / del specific element
                                */


                                *{
                                    box - sizing: border-box;
}

                                header{
                                    border: 3px solid red;
                                margin: auto;
                                width: 1200px;
}

                                img{
                                    width:  223px;
                                display: block;
                                margin: auto;

}

                                h3{
                                    text - align: center;
                                font-family:'Times New Roman', Times, serif;
                                margin: 0px;
}

                                .box{
                                    border: 4px solid black;
                                background-color: grey;
                                margin: 4px 0px;
                                padding: 20px;
                                display: inline-block;
                                width: 30%;
}

                                .container{
                                    margin: auto;
                                width: 1200px;
}

                                #div12{
                                    /* This will hide div12 from our website 
                                    Remember: here element will be hidden properly from our website*/
                                    display: none;

    /* We can also hide any element from us by using 
    Remember: here element will be hidden from us (user) not from website properly*/
    /* visibility: hidden; */
}
                            </style>
                        </head>
                        <body>
                            <header>
                                <img src="data:image/jpeg;base64,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" alt="Image not found">
                                    <h3>Welcome to Rayan's Blog</h3>
                            </header>

                            <div class="conatiner">
                                <div class="box">
                                    <h4 class="heading">Heading</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ducimus hic. Culpa provident facilis esse excepturi, aliquam et velit voluptates, doloribus dicta, exercitationem omnis voluptatum quisquam reprehenderit id corrupti eaque dolores blanditiis ea adipisci! Perferendis iure numquam accusamus adipisci ipsa quo fuga porro aliquid.</p>
                                </div>

                                <div class="box">
                                    <h4 class="heading">Heading</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ducimus hic. Culpa provident facilis esse excepturi, aliquam et velit voluptates, doloribus dicta, exercitationem omnis voluptatum quisquam reprehenderit id corrupti eaque dolores blanditiis ea adipisci! Perferendis iure numquam accusamus adipisci ipsa quo fuga porro aliquid.</p>
                                </div>

                                <div class="box">
                                    <h4 class="heading">Heading</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ducimus hic. Culpa provident facilis esse excepturi, aliquam et velit voluptates, doloribus dicta, exercitationem omnis voluptatum quisquam reprehenderit id corrupti eaque dolores blanditiis ea adipisci! Perferendis iure numquam accusamus adipisci ipsa quo fuga porro aliquid.</p>
                                </div>
                            </div>

                            <div id="div12">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem velit harum, consequuntur atque vel dicta expedita esse placeat culpa. Recusandae!
                            </div>

                        </body>
                    </html>`);
});

server.listen(port, hostname, () => {
                        console.log(`Server running at http://${hostname}:${port}/`);
});