const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main_content');

function whenButtonClicked() {
    let currentBtn = document.querySelectorAll('.active-btn');
    currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
    this.className += ' active-btn';
}

function whenSectionClicked(event) {
    const id = event.target.dataset.id;
    if (id){
        sectBtns.forEach(btn => {
            btn.classList.remove('active');
        });
    }
    event.target.classList.add('active');

    //hide other sections
    sections.forEach(section => {
        section.classList.remove('active');
    })

    const element = document.getElementById(id);
    element.classList.add('active');
}

function PageTransitions() {
    //click through buttons
    for (let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', whenButtonClicked)
    }

    //sections active class
    allSections.addEventListener('click', whenSectionClicked)
}

PageTransitions();
