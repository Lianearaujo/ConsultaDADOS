const DBConnector = require('./src/dbconnector.js');
const express = require('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');

const app= express();
const router = express.Router();

const port = process.env.PORT || 8484;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/', router);
router.route('/').get(async(req,res)  =>{
    resultado = await DBConnector.query('SELECT RA.prof_id as ID_PROFESSOR, count(RA.prof_id) as QuantidadeDeAlunos, prof.teachingability as CapacidadeDeEnsino' + 
    ' FROM RA INNER JOIN prof ON prof.prof_id = RA.prof_id GROUP BY RA.prof_id, prof.teachingability');
    res.json('VERIFICAR TERMINAL');
    
});



app.listen(port);

console.log("Iniciando na porta"+ port);

