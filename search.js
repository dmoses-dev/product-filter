const search = document.getElementById("search")
const products = document.querySelectorAll('.product h4')

search.addEventListener("keyup", mySearch)

function mySearch(e){
    const myText = e.target.value.toLowerCase()

    products.forEach((item)=>{
        if(item.textContent.toLowerCase().indexOf(myText) !== -1){
            item.parentElement.style.display = "block"
        }
        else{
            item.parentElement.style.display = "none"
        }
    })



}


