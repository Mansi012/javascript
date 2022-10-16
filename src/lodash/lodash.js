const _ = require("lodash");//import the lodash
function lodash(){
    let months=[
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
    ];
    console.log(_.chunk(months,4));
    const odd =[1,3,5,7,9,11,13,15,17,19];
    console.log(_.tail(odd,9));
    const num=[2,5,4,2,7,3,9,3];
    console.log(_.union(num));
    const keyValue=[
        ["horror","The Shining"],
        ["drama","Titanic"],
        ["thriller","Shutter Island"],
        ["fantasy","Pans Labyrinth"]

    ];
    console.log(_.fromPairs(keyValue));


}
module.exports.lodash=lodash;