// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear()

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links')

navToggle.addEventListener('click', function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else{
        linksContainer.style.height = 0;
    }
    // linksContainer.style.height = link + "px";
})

// ********** fixed navbar ************
const nav = document.querySelector('nav');
const topLink = document.querySelector('.top-link');


window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;
    if(scrollHeight > navHeight)
    {
        nav.classList.add('fixed-nav');
    }
    else
    {
        nav.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLink.classList.add('show-link');
    }
    else{
        topLink.classList.remove('show-link');
    }
})
// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        //prevent default
        e.preventDefault();

        // navigate to spesific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        //bizga navbarni click bo'lgandagi va bo'lmagandagi balandligi kerak
        const navHeight = nav.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = nav.classList.contains("fixed-nav");
        
        //elementni ustiga chiqib qolmaslik uchun 
        //navbar balandligi ayirib tashlanadi
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight;
        }
        if(navHeight > 82)
        {
            //chunki containerHeight balandligicha navHeight ga qo'shilagni uchun 
            // containerHeight balandligicha ortiqcha joy tashlaydi
            //menu yopilgani payti ortiqcha joy uchun containerHeightni qo'shish kerak
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    })
})