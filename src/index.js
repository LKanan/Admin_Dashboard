const icon_links = document.querySelectorAll(".nav_icon_link")
const icon_dot = document.querySelectorAll('.icon_dot')

for (let i = 0; i < icon_links.length; i++) {
    // console.log(icon_links[i])
    // if (icon_links[i].classList.contains('hidden')){
        icon_links[i].addEventListener('mouseover',()=>{
            icon_dot[i].classList.remove('opacity-0')
            icon_dot[i].classList.add('opacity-100')
        })
    // }
    // else{
        icon_links[i].addEventListener('mouseout',()=>{
            icon_dot[i].classList.remove('opacity-100')
            icon_dot[i].classList.add('opacity-0')
        })
    // }

}

    