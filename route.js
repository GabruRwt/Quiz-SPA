import home from './app/scripts/home'
import question from './app/scripts/question';
import addtask from './app/scripts/question';
const root = document.getElementById('root');
const route =async(value)=>{
    root.innerHTML=''
    switch(value){
        case '':{
            return root.appendChild(home());
        }
        case '#/questions':{
            return root.appendChild(await question());
        }
        
    }
}
export default route;