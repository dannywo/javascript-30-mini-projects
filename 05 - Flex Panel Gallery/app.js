const panels = document.querySelectorAll('.panel')

function toggleOpen() {    
    panels.forEach( p => {
        if(!this.classList.contains('open')){
            // console.log('we in here')
            p.classList.remove('open')
            // p.classList.remove('open-active')
        }
    })
    this.classList.toggle('open')
}

function toggleActive(e){
    console.log(e.propertyName);
    console.log(this);
    if(e.propertyName.includes('flex'))
        this.classList.toggle('open-active')
}

panels.forEach( p => p.addEventListener('click', toggleOpen));
panels.forEach( p => p.addEventListener('transitionend', toggleActive));
