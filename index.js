const navItem = document.querySelectorAll('.nav-item');
const nav = document.querySelector('.nav');
const indicator = document.querySelector('.indicator');
let index = 0;


function activeLink () {
  navItem.forEach(item => {
    item.classList.remove('active')
    this.classList.add('active');
  })
}

navItem.forEach(i => {
  i.addEventListener('click', activeLink)
})

nav.addEventListener('click', e => {
  navItem.forEach(i =>  {
    if(i.className.includes('active')){
      index = Array.prototype.indexOf.call(navItem, i)
    }
  })
  indicator.style.transform = `translateX(${134.5*index}px)`;
})
