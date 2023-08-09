const observer = new IntersectionObserver((el) => {
    el.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("show")
        } else{
            entry.target.classList.remove("show")
        }
    })
}, {threshold: 0.5})


const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))


const img = document.querySelector(".image")

img.addEventListener("click", () => {
    img.classList.contains("enlarged") ? img.classList.remove("enlarged") : img.classList.add("enlarged") 
})


const observer_project = new IntersectionObserver((el) => {
    el.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("show-project")
        } else{
            entry.target.classList.remove("show-project")
        }
    })
}, {threshold: 0.5})


const hiddenProjects = document.querySelectorAll(".hidden-project")
hiddenProjects.forEach((el) => observer_project.observe(el))




const observer_timeline = new IntersectionObserver((el) => {
    el.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("show-tl")
        } else{
            entry.target.classList.remove("show-tl")
        }
    })
}, {threshold: 0.5})

const hiddenTimeline = document.querySelectorAll(".timeline")
hiddenTimeline.forEach((el) => observer_timeline.observe(el))

