var http = require('http');

var fs = require('fs');

fs.writeFile('./ourput.txt', "Some dummy text", function(){
    console.log("Finish writing to output.txt");
});

fs.readFile('./inputfile1.txt', 'utf8', function(err, data){
    fs.appendFile('./output.txt', data, function(){
        console.log("2 - Finished appending to output.txt");
    });
    console.log("2 - Finished reading from inputfile1.txt");
});