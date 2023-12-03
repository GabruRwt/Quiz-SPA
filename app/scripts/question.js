import page from '../pages/question.html';
import {d,c} from './home';
import '../styles/question.css';

const question=async()=>{
    const quest= document.createElement('div');
    quest.innerHTML=page;
    const boxElement=quest.querySelector('.box');
    const loader=document.querySelector('.loader');
        let countQuestion=0;
        let counter;
        let score=0;
        let path=''
        if(c==null && d==null){
            path+='https://opentdb.com/api.php?amount=5&type=multiple';
        }else{
        path +=`https://opentdb.com/api.php?amount=5&category=${c}&difficulty=${d}&type=multiple`;
        }
        const res= await fetch(path).then(res=>res.json());
        const next_btn=quest.querySelector('.nextBtn');
        const result_box=quest.querySelector(".result_box");
        const restart= result_box.querySelector(".buttons .restart");
        const box=quest.querySelector(".box");
        
  
        next_btn.addEventListener('click',()=>{
            if(countQuestion<res.results.length-1){
                countQuestion++;
                showQuest(countQuestion);
                clearInterval(counter);
                startTimer(15, next_btn);
            }else{
                box.style.display='none'
                console.log('question are completed');
                showresultbox();
            }
        });
        
        
        
        const timeCount=quest.querySelector('.timer_sec');
        function showQuest(index){
            startTimer(15, next_btn);
            const total_quest=quest.querySelector(".totalQuest");
            let count=countQuestion+1;
            //appending data from results array to webpage
            let totalQuestion=`<span id="totalquestion"><p>`+count+`</p>of<p>`+res.results.length+`</p>Questions</span>`;
            total_quest.innerHTML=totalQuestion;
            const ques=quest.querySelector('.ques');
            const quesoption=quest.querySelector('.optionList');
            const  questionis =`<span id="quiz_question">`+ res.results[index].question +`</span>`;
            const opt=`<div class="option">`+res.results[index].incorrect_answers[0] +`</div>`
            +`<div class="option">`+res.results[index].incorrect_answers[1] +`</div>`
            +`<div class="option">`+res.results[index].incorrect_answers[2] +`</div>`
            +`<div class="option">`+res.results[index].correct_answer+`</div>`
            
        ques.innerHTML= questionis;
        quesoption.innerHTML=opt;
        const o=quesoption.querySelectorAll(".option");
        for (let i = 0; i < o.length; i++) {
            
            o[i].addEventListener("click",(ans)=>{
                clearInterval(counter);
                let answerUser=o[i].textContent;
                let correct = res.results[index].correct_answer;
                let allopt=quesoption.children.length;
                if(answerUser ==correct){
                    score+=1;
                    console.log(score);
                    o[i].classList.add("correct");
                    console.log("answer is correct");
                }
                else{
                    o[i].classList.add("incorrect")
                    console.log("wrong");
                    for (let v = 0; v < allopt; v++) {
                        if(quesoption.children[i].textContent == correct){
                            quesoption.children[i].setAttribute("class", "option correct");
                        }
                    }
                }
                for (let j = 0; j < allopt; j++) {
                    quesoption.children[j].classList.add("disabled");
                }
            });
            
        }        
    }

    //timer function
    function startTimer(time,next){
        counter=setInterval(timer,1000);
        function timer(){
            timeCount.textContent=time;
            time--;
            if(time===-1){
                next.click();
            }
            
        }
    }
    
    //resultbox after end of qiuestions
    function showresultbox(){
        const scorecard= result_box.querySelector(".score_text");
        let scoreTag= '<span id="score_text">You got   '+ score +'   out of  '+ res.results.length+' correct Answers.</span>';
        scorecard.innerHTML=scoreTag;
        result_box.style.display='block';
        const repBtt=quest.querySelector(".restart");
        repBtt.addEventListener("click",()=>{
            window.location.href='';
        })
    }
    //initializing the function with 0 index i.e question 1
    showQuest(0);
    return quest;
}
export default question;