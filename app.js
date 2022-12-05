const form = document.querySelector("form")
const input = document.querySelector("input")
const errorMsg= document.querySelector(".error-msg")
form.addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    const codeNumber= input.value

    callApiCode(codeNumber);
 
}
//appel de l'Api



async function callApiCode(inputCountry){
    try {
        const response = await fetch(`https://restcountries.com/v2/callingcode/${inputCountry}`)
        if (!response.ok) {
            throw new Error(`${response.status}`)
            

        }
        const data= await response.json()
        console.log(data)
        showResult(data)
        
    } catch (error){
        console.log(error)
        errorMsg.textContent="Oups🫢, une erreur se produite."

        
    }
}

function showResult(data){
    
}
  
