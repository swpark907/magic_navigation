const navItem = document.querySelectorAll('.nav-item');
const nav = document.querySelector('.nav');
const indicator = document.querySelector('.indicator');
let index = 0;



nav.addEventListener('click', e => {
  console.log(e.target.className)
  if(e.currentTarget.className === 'nav-item'){
    navItem.forEach(item => {
      item.classList.remove('active')
    })
    e.target.classList.add('active');

    navItem.forEach(i =>  {
      if(i.className.includes('active')){
        // console.log(navItem.indexOf.call(i))
        index = Array.prototype.indexOf.call(navItem, i)
      }
    })
    indicator.style.left = `${141.5*index}px`;
  }
})

console.log(navItem);






// navItem.forEach(item => {
//   item.onclick = e => {
//     console.log(e.target)
//   }
// })
