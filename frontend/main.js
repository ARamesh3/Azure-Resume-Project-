window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();

})

const functionApi = 'http://localhost:7071/api/visitercounter';

const getVisitCount =  () => {
    let Count = 30;
    fetch(functionApi).then(response => {
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