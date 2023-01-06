window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();

})

const functionApi = '';

const getVisitCount =  () => {
    let Count = 30;
    fetch(functionApi).then(response => {
        return response.json
    }).then(response =>{
        console.log("Website called function API.");
        Count = response.Count;
        document.getElementById("counter").innerText = Count;
    }).catch(function(error){
        console.log(error);
    })
    return Count ;
}