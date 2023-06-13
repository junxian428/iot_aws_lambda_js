const serverless = require('serverless-http')
const express = require('express')
const app = express()
const AWS = require('aws-sdk');


app.get('/iot',(req, res) => {
  
AWS.config.update({ region: 'us-east-1' });

const iotData = new AWS.IotData({ endpoint: '.amazonaws.com' });

const params = {
  topic: 'Hello',
  qos: 1,
  payload: 'Hello, IoT! From JS serveless'
};

iotData.publish(params, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Message published successfully:', data);
       res.send('Successfull Message IOT!');

  }
});
})

})


module.exports.handler = serverless(app);
