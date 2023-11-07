const toggleButton = document.getElementsByClassName('toggle-button')[0]
const dropdown = document.getElementsByClassName('dropdown')[0]


toggleButton.addEventListener('click',()=>{
    dropdown.classList.toggle('active')
})