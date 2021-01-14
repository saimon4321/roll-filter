var data=[];
var result=document.querySelector(".p1");
var result2=document.querySelector(".p2");
var btn=document.querySelector("button");
var Input=document.querySelector('input').value;
var userInput=data.push(Input);
var stringData=data[0];
function roll(){
    var RSectionRolls=stringData.match(/60[0-9][0-9]/g);
    var TSectionRolls=stringData.match(/6[4-5][0-9][0-9]/g);
    // var TSectionOtherRolls=stringData.match(/65[0-9][0-9]/g);
    // t section rolls duplicate prevented---
        var T=TSectionRolls.filter((value,index)=>{
            return TSectionRolls.indexOf(value)===index
  });
    // r section rolls duplicate prevented---
    var R=RSectionRolls.filter((value,index)=>{
        return RSectionRolls.indexOf(value)===index
});
   
    result2.innerHTML="R section rolls: "+R+" = total: "+ R.length +" students"; 
    result.innerHTML="T section rolls: "+T+" = total: "+ T.length +" students"; 

}
btn.addEventListener("click",roll);
// console.log(stringData)
// return console.log(data);