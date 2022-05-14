const mariadb = require('mariadb');
const config ={
     host: 'relational.fit.cvut.cz', 
     user:'guest', 
     password: 'relational',
     database: 'university',
     connectionLimit: 5
}
class DBConnector {
    dbconector = mariadb.createPool(config);
    
    async query(param){
        var conn = await this.dbconector.getConnection();
        var ret = null;
        conn.query(param)
        .then(data =>{
            ret = data;
            console.log(data);
            conn.end()
        })
        .catch(err =>{
            console.log(err)
            conn.end()
        })
        return ret;
    }
}

module.exports = new DBConnector();