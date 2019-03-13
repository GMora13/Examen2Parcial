var express = require('express');
var router = express.Router();

function initEmployee(db) {
  var empModel = require('./employeeModel')(db);

  //rutas a implementar
  // metodo     ruta                     body
  /*
      GET       /all
      GET       /byid/:id
      GET       /bycompany/:company
      GET       /byagerange/:min/:max
      GET       /bytag/:tag
      POST      /addtag/:id              tag
      DELETE    /delete/:id
      POST      /makeolder               age
   */

  router.get('/all', (req, res, next) => {
    empModel.getEmployees( (err, docs)=>{if(err) {
      console.log(err);
      return res.status(500).json({error:"Algo salio mal"});
    }
    return res.status(200).json(docs);
    });
  });// all

  router.get('/byid/:id', (req, res, next)=>{
    mongoModel.getEmployeesById(req.params.id, (err, docs)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"Error al obtener el empleado"});
      }
      return res.status(200).json(docs);
    } );//getemployeeById By Id
  });

  router.get('/bycompany/:company', (req, res, next)=>{
    mongoModel.getEmployeesByCompany(req.params.company, (err, docs)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"Error al obtener el empleado/compañia"});
      }
      return res.status(200).json(docs);
    } );//getemployeeById By Id
  });

  router.get('/byagerange/:min/:max', (req, res, next)=>{
    mongoModel.getEmployeesByAgeRange(req.params.age, (err, docs)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"Error al obtener el empleado/rangodeedad"});
      }
      return res.status(200).json(docs);
    } );//getemployeeById By Id
  });

  router.get('/bytag/:tag', (req, res, next)=>{
    mongoModel.getEmployeesByTag(req.params.tag, (err, docs)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"Error al obtener el empleado"});
      }
      return res.status(200).json(docs);
    } );//getemployeeById By Id
  });

  router.post('/addtag/:id', function(req, res, next){
    var empdata = Object.assign({} , tag, req.body);
    var dateT = new Date();
    var dateD = new Date();
    dateD.setDate(dateT.getDate()+ 3);
    tagadded.fcIng = dateT;
    tagadded.due = dateD;
    mongoModel.addNewtag(tagadded, (err, newThing)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"No se puede agregar tag, revisa lo que ingresas"});
      }
      return res.status(200).json(newtag);
    });// addNewTag
  });

  module.exports= initEmployee;
