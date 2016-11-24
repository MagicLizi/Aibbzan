var request = require('request');
var url = require('url');
var test = 'http://surenapi.51tv.com/aibbServlet?&callback=callback&action=addZan&zan=%7B%22zan%22%3A%5B%7B%22id%22%3A121%2C%22zanNum%22%3A2%7D%5D%7D&tr=1479970596.373&_=1479970576164';
// var urlObj = url.parse(test,true);
// console.log(urlObj);

function addZan(){
  var url = "http://surenapi.51tv.com/aibbServlet";
  var curTime = new Date().getTime();
  var params = {
    method: 'GET',
    url: url,
    qs: {
      '': '',
      callback: 'callback',
      action: 'addZan',
      zan: '{"zan":[{"id":121,"zanNum":1}]}',
      tr: (curTime + 300)/1000,
      _: curTime
    }
  }
  request(params,function(error,response,body)
  {
    console.log(body);
  });
}

setInterval(()=>{
  addZan();
},1000);