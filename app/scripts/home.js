import page from '../pages/home.html';
import '../styles/home.css';

let d;
let c;
const home=()=>{
    const homeBt= document.createElement('div');
    homeBt.innerHTML=page;
    const diff= homeBt.querySelector('#difficulty');
    const cat= homeBt.querySelector('#category');
    diff.addEventListener('change',()=>{
        d= diff.options[diff.selectedIndex].value;
        console.log(d);
        })
    cat.addEventListener('change',()=>{
            c= cat.options[cat.selectedIndex].value;
            console.log(c);
            console.log(d);
            })
            
    return homeBt;
}
export default home;
export {d,c};