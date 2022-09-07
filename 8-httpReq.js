//*end can only be used one time either at the end or inside if,else

const http=require('http')

//req & res are objects
const server=http.createServer((req,res)=>{         //req(request) - represent incoming request ,for e.g. user asking for your webpage, so will have information about the methods etc  //res(respose) - is what we are sending back
    /*
    res.write("WELCOME WORLD")
    res.end()
    */
   if(req.url==='/'){       //url will tell what adddress client is requesting //for homepage we use forward slash
    res.end("Welcome to homepage")
   }
   else if(req.url==='/about'){
    res.end("This is the about page")
   }
   else{
   res.end(
    `
        <h1>Opps</h1>
        <p>Wrong page</p>
        <a href='/'>go back to homepage</a>
    `
   )}
//    res.end();
})

server.listen(5000)         //what port our server is going to be listening for