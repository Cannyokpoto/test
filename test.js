 
 //Q1
 const fetchData = async (url) => { 
 const response = await fetch(url); 
 return response.json(); 
 };

 const urls = ['/api/user/1', '/api/user/2', '/api/user/3']; 

//  urls.forEach(async (url) => { 
//  const data = await fetchData(url); 
//  console.log(data); 
//  })


 const fetchAllData = async ()=>{
    const res1 = await fetchData(urls[0]);

    console.log(res1);

    const res2 = await fetchData(urls[1]);
    console.log(res2);

    const res3 = await fetchData(urls[2]);
    console.log(res3);
 }

    //I think this is a better approach
    urls.forEach(async (url) => { 
    const [data1, data2, data3] = await Promise.all([fetchData(url)]); 

    console.log(data1); 
    console.log(data2); 
    console.log(data3); 
    })



 //Q2

 //fs.readFile is memory intensive, because it reads the entire file into the memory

 const fs = require('fs');

 const readStreams = fs.createReadStream('csvfile', {encoding: 'utf8'});

 readStreams.on('data', (chunk) =>{
    console.log('Data from file:', chunk);
 })





 //Q3

//  app.use((req, res, next) => { 
//  if (!req.user) { 
//  throw new Error('Unauthorized'); // API hangs instead of sending 401 
//  } 
//  next(); 
// });


app.use('/', (req, res, next)=>{
    if(!req.user){
        res.status(401).json({
            message: 'Unauthorized'
        })
    }

    res.send('Hello world');

    //I would centralize error handling across all routes by creating a reusable error handler.
})
