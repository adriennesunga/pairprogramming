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
            {name: "Brooklyn 99",
            isCorrect: true
            },
            {name: "The Tudors",
            isCorrect: false
            }, 
            {name: "Criminal Minds",
            isCorrect: false},
            {name: "CSI",
            isCorrect:false
            }
        ]
        }
    ],
    movies:[
        {
        img: "/jp.jpg",
        choices:[
            {name: "The Fly",
            isCorrect: false
            },
            {name: "The Grand Budapest Hotel",
            isCorrect: false
            }, 
            {name: "Jurassic Park",
            isCorrect: true},
            {name: "Annie Hall",
            isCorrect:false
            }
        ]
        }
    ],
    music:[
        {
        img: "/cardi2.jpg",
        choices:[
            {name: "Beyonce",
            isCorrect: false
            },
            {name: "Cardi B",
            isCorrect: true
            }, 
            {name: "Brandy",
            isCorrect: false},
            {name: "Left-Eye",
            isCorrect:false
            }
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