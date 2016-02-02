//Min + (int)(Math.random() * ((Max - Min) + 1))
//minimum + rn.nextInt(maxValue - minvalue + 1)


module.exports = function getFortune(ranNo) {
    var fortunes = ["Next time you have the opportunity, go on a rollercoaster.", "You will be successful in your work", "You learn from your mistakes, you will learn a lot today.", "Sometimes travel to new places leads to great transformation.", "There is someone rather annoying in your life that you need to listen to."]
    var randomNum = Math.floor(Math.random() * fortunes.length);
    console.log(fortunes[(randomNum)]);
    
}


/*function moduleFun(input) {
    //do something
    
    var output = input + 1
}
*/

