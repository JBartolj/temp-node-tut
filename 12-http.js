const http = require ('http')

const server = http.createServer ((req, res) => {
if(req.url === '/') {
    res.end ('Srbus, dobrodosu pr ns')
}

if(req.url === '/about') {
    res.end ('Tlele je nasa zguduvina')
}
res.end ('<h1>Ooops</h1>')
})

server.listen(2400)