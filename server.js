const express = require('express')
const server = express()
const nunjucks = require('nunjucks') //permite usar variáveis no html

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi totam praesentium veritatis recusandae reiciendis quisquam amet aspernatur vel commodi quod quam, qui at tempora quos dolorum reprehenderit beatae dolore.",
        url: "#"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercicíos",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi totam praesentium veritatis recusandae reiciendis quisquam amet aspernatur vel commodi quod quam, qui at tempora quos dolorum reprehenderit beatae dolore.",
        url: "#"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi totam praesentium veritatis recusandae reiciendis quisquam amet aspernatur vel commodi quod quam, qui at tempora quos dolorum reprehenderit beatae dolore.",
        url: "#"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em família",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi totam praesentium veritatis recusandae reiciendis quisquam amet aspernatur vel commodi quod quam, qui at tempora quos dolorum reprehenderit beatae dolore.",
        url: "#"
    }
]

//configurar arquivos estáticos (scripts, css, imagens)
server.use(express.static("public"))

//o primeiro parâmetro é a pasta onde está o html
nunjucks.configure("views", {
    express: server, //faz o link com o express através da variável server
    noCache: true
})

server.get("/", function(req, res) {
    const reversedIdeas = [...ideas].reverse()
    let lastIdeas = []
    for (idea of reversedIdeas) {
        if (lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideas", function(req, res) {
    const reversedIdeas = [...ideas].reverse()

    return res.render("ideas.html", { ideas: reversedIdeas })
})

server.listen(3000)