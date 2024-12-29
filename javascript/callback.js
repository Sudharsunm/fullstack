 /*
 call back
 >nested fun
function submitform(form msg, dbstoring()   ){

clg("form msg")}
function dbstoring(){

clg("data stored successfully  ")
}
 */
dbSharing=()=>{
    console.log("data stored successfully")
}
/*function submitForm(formMsg,dbs){
    dbs()
    console.log(formMsg)
}
submitForm("form submitted successfully",dbSharing)
*/

function submitForm(formMsg,dbs){
    setTimeout(()=>{
    dbs()
    console.log(formMsg)
    },2000)
}
submitForm("form submitted successfully",dbSharing)   