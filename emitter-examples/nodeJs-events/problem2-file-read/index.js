const MyFile = require('./file');

const mf = new MyFile();


mf.on('onFilesAdded',(fileNames) => { 
    console.log("-----------------------------------------");
    console.log(" Files Added to List ",fileNames)
    
    
})
mf.on('onFileNotFound',(msg) => { 
    console.log("-----------------------------------------");
    console.log(" File Not found ",msg.fileName)
    
})
mf.on('onFileFound',(msg) => { 
    console.log("-----------------------------------------");
    console.log(" File found ",msg.fileName);
    console.log(" File Content ",msg.content);

})

mf.addFiles(['f1.txt','f2.txt','f3.txt']);
mf.displayAllFiles();