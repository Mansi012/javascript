const getInfo ={
    name: "lithium",
    week: "W3D5",
    topic: "Topic Node js Topic -- How to create Module and Export it."
};
function getBatchInfo(){
    console.log(
        `Batch name ${getInfo.name} , Current Day ${getInfo.week} , ${getInfo.topic} `
        );
        const today=new Date();
        const day = today.getDate();
        const month = today.getMonth()+1;
        const year = today.getFullYear();
        console.log(day);
        console.log(month);
        console.log(year);
}
module.exports.getBatchInfo=getBatchInfo;