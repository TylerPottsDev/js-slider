const next_btn = document.querySelector('#next');
const prev_btn = document.querySelector('#prev');
const slider = document.querySelector('.slider');
let first_slide;
let last_slide;
let projects = [
    {
        title: "Project 1",
        type: "Website",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit?",
        image: "./images/slide-1.jpg"
    },
    {
        title: "Project 2",
        type: "App",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        image: "./images/slide-2.jpg"
    },
    {
        title: "Project 3",
        type: "Game",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        image: "./images/slide-3.jpg"
    }
]

projects.forEach(({title, type, content, image}, i) => {
    const slide = document.createElement('div');
    slide.classList.add('slider__slide');
    slide.style.backgroundImage = "url('" + image + "')";
    if (i == 0) {
        first_slide = slide;
        
        slide.classList.add('active');
    }

    if (i + 1 == projects.length) {
        last_slide = slide;
    }

    const slide_content = document.createElement('div');
    slide_content.classList.add('slider__content');

    const content_title = document.createElement('h3');
    content_title.classList.add('slider__title');
    content_title.textContent = title;

    const content_type = document.createElement('span');
    content_type.textContent = type;

    const content_content = document.createElement('div');
    content_content.classList.add('slider__desc');
    content_content.textContent = content;

    content_title.appendChild(content_type);
    slide_content.appendChild(content_title);
    slide_content.appendChild(content_content);
    slide.appendChild(slide_content);
    slider.appendChild(slide);
});


next_btn.addEventListener('click', () => {
    const active_slide = document.querySelector('.slider__slide.active');
    let sibling = active_slide.nextElementSibling;
    if (sibling == null) {
        sibling = first_slide;
    }
    

    if (sibling.classList.contains('slider__slide')) {
        active_slide.classList.remove('active');
        sibling.classList.add('active');
    }
});
prev_btn.addEventListener('click', () => {
    const active_slide = document.querySelector('.slider__slide.active');
    let sibling = active_slide.previousElementSibling;
    if (sibling == null || !sibling.classList.contains('slider__slide')) {
        sibling = last_slide;
        console.log(sibling);
        
    }
    

    if (sibling.classList.contains('slider__slide')) {
        active_slide.classList.remove('active');
        sibling.classList.add('active');
    }
});