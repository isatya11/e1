var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database.sqlite3',(err)=>{
    if (err){
        console.log(err.message);
    }
    console.log('Connected to DB')
});
db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS emp1 (first_name TEXT,last_name TEXT)"); 
    console.log('table created')
//   db.run("CREATE TABLE lorem (id TEXT)"); 
//   var stmt = db.prepare("INSERT INTO users VALUES (?,?,?,?,?,?,?,?,?,?,?,?)");
//   for (var i = 0; i < 2; i++) {
//       stmt.run("Ipsum " + i);
//   }
    // var stmt = db.prepare("INSERT INTO emp1 VALUES (?,?)");
    // stmt.run("satya","prakash");
    // stmt.run("vivek","kumar");
    // var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    // stmt.run("satya");
    // var stmt = db.prepare("INSERT INTO users VALUES (?,?,?,?,?,?,?,?,?,?,?,?)");
    // stmt.run(1,"satya","prakash","satya11196@gmail.com","male","11:01:1996","8609283095","New Alipore","Kolkata","70053","right now",91);
    //stmt.finalize();
    let sql = `SELECT rowid AS id, first_name, last_name FROM emp1`
    db.each(sql, function(err, row) {
        console.log(row.id + ": " + row.first_name+" "+row.last_name);
  });
})
 
db.close();