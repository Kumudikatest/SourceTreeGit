let AWS=require('aws-sdk');const ddb=new AWS.DynamoDB.DocumentClient();exports.handler=function(event,context,callback){ddb.put({TableName:'Test',Item:{'ID':1}}).promise().then((data)=>{console.log(data);}).catch((err)=>{console.log(err);});callback(null,{"message":"Success"});}