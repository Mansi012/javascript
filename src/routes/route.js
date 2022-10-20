const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})
//----------------------------------------
let player=[{
    name: "manish",
dob: "1/1/1995",
gender: "male",
city: "jalandhar",
sports: [
"swimming"
]

},
{
    name: "mansi",
    dob: "12/07/2000",
    gender: "female",
    city: "kanpur",
    sports: ["tennis"]
},
{
    name: "shivanshu",
    dob: "24/07/2004",
    gender: "male",
    city: "mathura",
    sports: ["cricket"]
}, 
];
router.post("/players",function(req,res){
    console.log(player)
    let newp=req.body;// body me data aa jayega
    // player name should be unqiue,this name should not exit in the player array

    let find=req.body.name;
    console.log(" new player find :",newp);
    for(let i of player){
        if(i.name==find){
 return res.send(" name already present")
        }
    }
        player.push(newp)
        res.send({msg:player,status:true})
    
})
//let myArr=[23,45,67,281394,423,24,42323,4,234,12,34]
//router.post("/post-query-2",function(req,res){
  //  let input=req.query.input
    //let finalArr=[]
    //for(let i=0;i<myArr.length;i++){
      //  if(myArr[i]>input)
        //finalArr.push(myArr[i])
    //}
    //res.send({data:myArr,status:true})
//})
module.exports = router;
//query and parms
//parms(path parm):used to load differnt items/pages based on a variable value in url
// parms variable name is not visible in the url
