const input = require('readline-sync');
let score = 0
let kuler = require("kuler")
let name= input.question("whats your name ")
console.log(kuler(`hello ${name}, welcome to quizify`, "#967bb6"))
let leaderboard={
    data :[
        {
            name: "Ashish",
            score: 1
        },
        {
            name: "Anish",
            score: 2
        },
        {
            name: "ria",
            score: 2
        }
    ]
}
const datbase={
    data:[
        {
            question:"Which of the following keywords is used to define a variable in Javascript?",
            options:{
                a: "var",
                b: "let",
                c:"const",
                d:"all of the above"
            },
            correctAnswer: "d"
        },
        {
            question:"Which of the following methods is used to access HTML elements using Javascript?",
            options :{
                a: "getElementById()",
                b: "getElementByClassName()",
                c: "both",
                d: "none"
            },
            correctAnswer: "c"
        },
        {
            question:"Upon encountering empty statements, what does the Javascript Interpreter do?",
            options :{
                a: "Throws an error",
                b: "Ignores the statement",
                c: "gives a warning",
                d: "none"
            },
            correctAnswer: "b"

        }
    ]

}
function showanswer(info, correctAnswer){
    if(info===correctAnswer){
        console.log(kuler("correct answer","#90ee90"))
        score++
    }
    else{
        console.log(kuler("incorrct answer","#ff0000"))
        console.log(kuler(`correct answer is ${correctAnswer}`,"#90ee90"))
    }
}

function showquestion(){
    for (let i=0; i<datbase.data.length;i++){
        console.log(`\nQ${i+1} ${datbase.data[i].question}`)
        for (let key in datbase.data[i].options){
            console.log(`${key}  ${datbase.data[i].options[key]}`)
            
        }
        let info = input.question("enter answer: ").toLowerCase();
        showanswer(info, datbase.data[i].correctAnswer)
    }


    
console.log(`score- ${score}`)
}
function scorehigh(leaderboard){
    leaderboard.data.push({name:name, score:score})
    console.log("check your position on leaderboard🎉🎉🎉🎉")
    let sortarr= leaderboard.data.sort((a,b) =>b.score-a.score)
    console.log(sortarr)
    if(sortarr[0].name===name){
        console.log("conrats")

    }

}
showquestion() 
scorehigh(leaderboard)

