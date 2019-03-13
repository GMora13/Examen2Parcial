var ObjectID = require('mongodb').ObjectID;

function employeeModel(db){
  var lib = {};
  var empColl = db.collection('emps');
  
  lib.getEmployees = (handler)=>{
    // implementar
    // empCollener todos los documentos
    empColl.find({}).toArray(
      (err , docs) => {
        if(err){
          handler(err, null);
        }else{
          handler(null, docs);
        }
      }
     );
    //return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesById = (id, handler) => {
    empColl.findOne({ "_id": new ObjectId(thingId)}, (err, doc)=>{
      if(err){
        handler(err, null);
      }else{
        handler(null, doc);
      }
    });
    // return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByCompany = (company, handler) => {
    empColl.findOne({ "company": new ObjectId(company)}, (err, doc)=>{
      if(err){
        handler(err, null);
      }else{
        handler(null, doc);
      }
    });
   // return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByAgeRange = (ageLowLimit, ageHighLimit, handler) => {
    empColl.findOne({ "Age": new ObjectId(ageHighLimit)}, (err, doc)=>{
      if(err){
        handler(err, null);
      }else{
        handler(null, doc);
      }
    });
   // return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByTag = (tag, handler) => {
    empColl.findOne({ "tag": new ObjectId(tag)}, (err, doc)=>{
      if(err){
        handler(err, null);
      }else{
        handler(null, doc);
      }
    });
   // return handler(new Error("No Implementado"), null);
  }

  lib.addEmployeeATag = ( tag, id, handler) => {
    var curatedTags = Array.isArray(tags)? tags: [tags];
    var updateObject = { "$set": { "tags": curatedTags}};
    empColl.updateOne({"_id": ObjectId(id)}, updateObject, (err, rsult)=>{
        if(err){
          handler(err, null);
        }else{
          handler(null, rsult.result);
        }
    } );
    //return handler(new Error("No Implementado"), null);
  }

  lib.removeEmployee = (id, handler) => {
    empColl.deleteOne({"_id": ObjectId(Id)}, (err, rslt)=>{
      if(err){
        console.log(err);
        handler(err, null);
      } else {
        handler(null, rslt.result);
      }
    });
    //return handler(new Error("No Implementado"), null);
  }

  lib.increaseAgeToAll = (ageDelta, handler) => {
    //Implementar
    //Se requiere modificar todos los documentos de la colección
    // incrementando age por la cantidad de ageDelta $inc
    return handler(new Error("No Implementado"), null);
  }
  return lib;
}

module.exports = employeeModel;
