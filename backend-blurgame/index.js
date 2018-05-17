const express = require('express'),
      app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//allows CORS
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const gameContent = {
    tv:[
        {
        img: "/brooklyn.jpg",
        choices:[
            "Brooklyn 99", "The Tudors", "Criminal Minds", "CSI"
        ]
        }
    ],
    movies:[
        {
        img: "/jp.jpg",
        choices:[
            "The Fly", "The Grand Budapest Hotel", "Jurassic Park", "Annie Hall"
        ]
        }
    ],
    music:[
        {
        img: "/cardi2.jpg",
        choices:[
            "Beyonce", "Cardi B", "Brandy", "Left-Eye"
        ]
        }
    ]
};

app.get('/gamecontent', (req,res)=>{
    res.json(gameContent)
});

app.listen(8080,()=>{
    console.log('server running on 8080')
});