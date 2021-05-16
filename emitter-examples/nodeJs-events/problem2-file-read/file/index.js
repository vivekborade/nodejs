const EventEmitter = require('events').EventEmitter;
var fs = require('fs');


class MyFile extends EventEmitter
{
    constructor()
    {
        super();
        this.fileList = [];
    }

    addFiles(fileList = [])
    {
        this.fileList = fileList;
        this.emit('onFilesAdded',this.fileList.toString());
    }

    readFileContent(fileName)
    {
        return new Promise(function(resolve, reject) {
            fs.readFile(fileName,'utf8', function(err, data){
                if (err) 
                    resolve({content:data,fileName : fileName}); 
                else
                    resolve({content:data,fileName : fileName});
            });
        });       
    }

    displayAllFiles()
    {
        Promise.all( this.fileList.map( (fileName) => this.readFileContent(fileName)) )
               .then( (results) => {
                    //console.log(results);
                    results.forEach( (result) => {
                        if(result.content===undefined)
                            this.emit('onFileNotFound',{content: result.content,fileName : result.fileName})
                        else
                            this.emit('onFileFound',{content: result.content,fileName : result.fileName})
                    } ) 
               });  
    }
}

module.exports = MyFile;