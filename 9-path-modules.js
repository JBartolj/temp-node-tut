const path = require ('path')
console.log(path.sep);

const filePath = path.join ('users', 'janez', 'desktop')
console.log(filePath);

const base = path.basename (filePath)
console.log(base);

const absolute = path.resolve (__dirname, 'users', 'janez','desktop' )
console.log(absolute);