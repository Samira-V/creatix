let menu = document.querySelector(".mobile-menu-container")
let header = document.querySelector(".header")
let burger = document.querySelector(".burger")
let openMenu = document.querySelector(".openMenu")
const cursor = document.querySelector(".cursor")
const menuItem = document.querySelectorAll(".menu-item")

burger.addEventListener('click', () => {
  header.classList.toggle('openMenu')
})

menu.addEventListener("mousemove", (e) => {
  console.log(e)
  cursor.style.left = `${e.clientX}px`
    cursor.style.top = `${e.clientY}px`
})

for (item of menuItem) {
  item.addEventListener('mouseenter', () => {
    cursor.style.opacity = "1"
    cursor.style.transform = "translate(-50% , -50%) scale(1)"
  })
}
for (item of menuItem) {
  item.addEventListener('mouseleave', () => {
    cursor.style.opacity = "0"
    cursor.style.transform = "translate(-50% , -50%) scale(0)"
  })
}
window.addEventListener('load',()=>{
  const title = document.querySelector(".title")
  const image = document.querySelector('.image')
  const className = title.getAttribute('data-index')
  const imgClassName = image.getAttribute('data-index')
  title.classList.add(className)
  image.classList.add(imgClassName)
})

 