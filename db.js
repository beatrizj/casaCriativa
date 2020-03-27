const sqlite3 = require('sqlite3').verbose() //verbose traz mensagens necessárias
const db = new sqlite3.Database('./ws.db')

db.serialize(function() { //permite rodar comandos sql
    //cria a tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS ideas(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         title TEXT,
    //         category TEXT,
    //         description TEXT,
    //         link TEXT
    //     );
    // `)

    //insere um dado
    // const query = `
    //     INSERT INTO ideas (
    //         image,
    //         title,
    //         category,
    //         description,
    //         link
    //     ) VALUES (?, ?, ?, ?, ?);
    // `
    // const values = [
    //     "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    //     "Cursos de Programação",
    //     "Estudo",
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi totam praesentium veritatis recusandae reiciendis quisquam amet aspernatur vel commodi quod quam, qui at tempora quos dolorum reprehenderit beatae dolore.",
    //     "#"
    // ]

    // db.run(query, values, function(err) {
    //     if (err) return console.log(err)
    //     console.log(this)
    // })

    // db.run(`DELETE FROM ideas WHERE id = ?`, [20], function(err) {
    //     if (err) return console.log(err)
    //     console.log(this)
    // })

    // db.all(`SELECT * FROM ideas`, function(err, rows) {
    //     if (err) return console.log(err)
    //     console.log(rows)
    // })
})

module.exports = db