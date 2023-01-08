console.log('Welcome to IFoodYou')
const navbarIcon=document.getElementById('navbarIcon')
const inputValue=document.getElementById('searchInput')
const searchBtn=document.getElementById('searchBtn')
const foodinfo=document.getElementsByTagName('p')
searchBtn.addEventListener('click',()=>{
    const value=String(inputValue.value)
    let count=0;
    Array.from(foodinfo).forEach(function(element){
        if(element.innerText.includes(value)){
            element.parentElement.parentElement.style.display='block'
            count+=1
        }
        else{
            element.parentElement.parentElement.style.display='none'

        }
        
    })
    if(count==0){
            alert("No Data Found")
        }
        inputValue.value=''
})
navbarIcon.addEventListener('click',()=>{
    
    if(document.getElementsByClassName('navbar')[0].style.display=='block'){

        document.getElementsByClassName('navbar')[0].style.display='none'
    }
    else{
        document.getElementsByClassName('navbar')[0].style.display='block'
    }
})