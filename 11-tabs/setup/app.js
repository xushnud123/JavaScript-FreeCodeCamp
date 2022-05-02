const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    const Id = e.target.dataset.id;
    if(Id){
        //barcha button activ olinadi va e.target.classList.add qilib target
        //yani bosilgan buttonga activ beriladi e.target click bo'lgan buttonni
        //o'zi aniqlab oladi
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });

        articles.forEach(function(article){
            article.classList.remove('active');
        })
        const element = document.getElementById(Id);
        element.classList.add('active');
    }
})