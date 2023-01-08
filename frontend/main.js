window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();

})

const functionapiURL = "https://getresumevisitercount.azurewebsites.net/api/visitercounter?code=y4t2lbhbuzcMJ2pbXXN_lRY85gQstu-CyrJzgyYLy8NmAzFu3zcAKw==";
const localFunctionApi = 'http://localhost:7071/api/visitercounter';

const getVisitCount =  () => {
    let Count = 30;
    fetch(functionapiURL).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        Count = response.count;
        document.getElementById("counter").innerText = Count;
    }).catch(function(error){
        console.log(error);
    })
    return Count ;
}