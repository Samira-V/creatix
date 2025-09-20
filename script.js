let menu = document.querySelector(".mobile-menu-container")
let header = document.querySelector(".header")
const cursor = document.querySelector(".cursor")
let menuItem = document.querySelectorAll(".menu-item")

menu.addEventListener('click', () => {
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