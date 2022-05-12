function submitData(testName, testEmail){
    
    return fetch("http://localhost:3000/users", {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: testName,
            email: testEmail,
        })
    })
    .then(response => response.json())
    .then(response =>{
        getElementOnDOM(response)
    })
    .catch((error)=>{
       document.body.innerHTML = error.message
    })
}

submitData("Sam", "email")

function getElementOnDOM(response){
    const element = document.querySelector("body")
    element.textContent = response.id
}