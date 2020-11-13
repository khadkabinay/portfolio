const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const brandTitle    = document.querySelector(".brand-title");
let newDate           = new Date()
let hours             = newDate.getHours()
console.log(hours)



toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})




// // defines greeting hours 
function greeting(hours){
    if(hours >= 6 && hours < 12){
        return "Good Morning !"
    }else if (hours >= 12 && hours < 17){
        return "Good Afternoon !"
    }else if(hours >= 17 && hours < 20){
        return "Good Evening !"
    }else if(hours >= 20 && hours < 24 || hours >= 1 && hours < 6 || hours === 0 ){
        return "Good Night !"
    }

}


//    // insert text into DOM 
function showGreet(){
    let greetText = `${greeting(hours)}`
    brandTitle.textContent = greetText
    brandTitle.setAttribute("style", "color: white;")

}

showGreet()