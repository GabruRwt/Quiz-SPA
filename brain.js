import './app/styles/style.css'
import route from './route.js'
window.addEventListener('load' , ()=>{
    route(window.location.hash)
    window.addEventListener('hashchange',()=>{
        route(window.location.hash)
    })
})