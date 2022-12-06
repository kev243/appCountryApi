const form = document.querySelector("form")
const input = document.querySelector("input")
const loader = document.querySelector(".loader");
const errorMsg= document.querySelector(".error-msg")
form.addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    const codeNumber= input.value
    result.textContent = "";
    errorMsg.textContent = "";
    loader.style.display = "flex"
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
        loader.style.display="none"

        
    }
}

const result=document.querySelector(".result")

function showResult(data){
    //condition pour verifier si on a un resultat
    if (!data.length){
        errorMsg.textContent="Oups🫢, l'indicatif n'existe pas."
        loader.style.display="none"
        return; 

    }
    
    else{ 
            const card = document.createElement("div")
            card.className="result-item"
            card.innerHTML=`
            <img src="${data[0].flags.svg}" alt="Image drapeau" class="flag-img">
            <h3 class="name-pays">Pays: <span> ${data[0].name}</span> </h3>
            <h3 class="name-pays">Continent: <span> ${data[0].region}</span> </h3>
            <h3 class="name-pays">Population: <span> ${data[0].population}</span> </h3>
            <h3 class="name-pays">Devise: <span> ${data[0].currencies[0].name}</span> ,<span> ${data[0].currencies[0].code}</span></h3>
            `
            result.appendChild(card)
            
        
            loader.style.display="none"
    }

}
  
