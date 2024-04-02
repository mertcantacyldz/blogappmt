const mysql = require("mysql2")
// mysql bağlantısı
const config= require("../config")
let connection= mysql.createConnection(config.db)


connection.connect((err)=>{
    if(err){
        console.log("baglanti hatasi" ,err)
    }
    // connection.query("select * from blog", (err, result)=>{
    //     console.log(result[0].title)
    // })
    console.log("mysql baglantisi yapildi")
})

module.exports = connection.promise()
