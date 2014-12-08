var soap = require('soap');
var url = 'http://192.168.1.106/DataTestSite/EBWebService.asmx?wsdl';
var args = {count: 5};

soap.createClient(url, function(err, client) {
  if (err) {
    return console.log(err);
  }

  //console.log(client);

  client.RYJBXX(args, function(err, result) {
    if (err) {
      return console.log(err);
    }

    return console.log(result.RYJBXXResult);
  });
});
