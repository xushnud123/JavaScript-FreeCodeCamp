//using selectors inside the element
// traversing the dom



const gurux = document.querySelectorAll(".question");

gurux.forEach(function(azo){
    //console.log(question)
    const btn = azo.querySelector(".question-btn");
    //console.log(btn);
    btn.addEventListener('click', function(){
        gurux.forEach(function(qism){
            console.log(qism);
            console.log(azo);
            if(qism !== azo)
            {
            qism.classList.remove('show-text');
            }
        })

        azo.classList.toggle('show-text');
    })
})



















//birinchi usul
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         console.log(e.currentTarget.parentElement.parentElement)
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     })
// })
