// mobile menu
document.getElementById('burger').onclick = function (e) {
  let target = e.target
  if (target) {
    document.getElementById('nav').classList.toggle('show_menu')
  }
}

// tabs in shop page
let tabs = document.querySelector('.tabs')
let tabBtn = document.querySelectorAll('.tab_btn')
let tabContent = document.querySelectorAll('.tab_content')

function hideTabContent(a) {
  for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove('show_tab');
    tabContent[i].classList.add('hide_tab');
  }
}
hideTabContent(1);

function showTabContent(b) {
  if (tabContent[b].classList.contains('hide_tab')) {
    tabContent[b].classList.add('show_tab');
    tabContent[b].classList.remove('hide_tab');
  }
}
// //////start
// let setColorTab = () => {
//   tab[0].classList.add('color-tab')
// }
// setColorTab();
// //////end

tabs.onclick = function(event) {
  let target = event.target;
  
  // ////////start
  // tab.forEach(item=> {
  //   item.classList.remove('color-tab')
  // });
  // ////////end
  
  if (target && target.classList.contains('tab_btn')) {
    for (let i = 0; i < tabBtn.length; i++) {
      
      if (target === tabBtn[i]) {
        // ///start
        // tabBtn[i].classList.add('color-tab');
        // ///end
        hideTabContent(0);
        showTabContent(i);
        break;
      }
    }
  }
}