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
            isCorrect: false
            },
            {name: "CSI",
            isCorrect:false
            }
        ]
        },
        {
            img: "/xfiles.jpg",
            choices:[
                {name: "Scrubs",
                isCorrect: false
                },
                {name: "ER",
                isCorrect: false
                }, 
                {name: "X-Files",
                isCorrect: true
                },
                {name: "House",
                isCorrect:false
                }
            ]
        },
        {
            img: "/tyrion.jpeg",
            choices:[
                {name: "Outlander",
                isCorrect: false
                },
                {name: "Game of Thrones",
                isCorrect: true
                }, 
                {name: "Supernatural",
                isCorrect: false
                },
                {name: "Vikings",
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
                isCorrect: true
                },
                {name: "Annie Hall",
                isCorrect:false
                }
            ]
        },
        {
            img: "/reservoirdogs.jpg",
            choices:[
                {name: "Reservoir Dogs",
                isCorrect: true
                },
                {name: "Pulp Fiction",
                isCorrect: false
                }, 
                {name: "Kill Bill",
                isCorrect: false
                },
                {name: "Inglourious Basterds",
                isCorrect:false
                }
            ]
        },
        {
            img: "/snatch.jpg",
            choices:[
                {name: "Fight Club",
                isCorrect: false
                },
                {name: "Rocky",
                isCorrect: false
                }, 
                {name: "Fighty McFightface",
                isCorrect: false
                },
                {name: "Snatch",
                isCorrect:true
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
                isCorrect: false
                },
                {name: "Left-Eye",
                isCorrect:false
                }
            ]
        },
        {
            img: "/TAYLOR-SWIFT.jpg",
            choices:[
                {name: "Taylor Swift",
                isCorrect: true
                },
                {name: "Miley Cyrus",
                isCorrect: false
                }, 
                {name: "Dani Subject",
                isCorrect: false
                },
                {name: "Christina Aguilera",
                isCorrect:false
                }
            ]
        },
        {
            img: "/thom.jpg",
            choices:[
                {name: "Sting",
                isCorrect: false
                },
                {name: "Noel Gallagher",
                isCorrect: false
                }, 
                {name: "Thom Yorke",
                isCorrect: true
                },
                {name: "Bowie",
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