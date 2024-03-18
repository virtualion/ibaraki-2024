const body = document.body;
// let params = (new URL(document.location)).searchParams;
// let lang =  params.get('lang')?.toUpperCase() ?? 'EN';

const langDataSwitcher = (dataEN, dataJP) => {
  const htmlLang = document.querySelector('html').getAttribute('lang')
  if(htmlLang === 'en'){
    document.querySelector('[data-lang="jp"]').classList.remove('active')
    document.querySelector('[data-lang="en"]').classList.add('active')
    return dataEN
  } else if(htmlLang === 'jp'){
    document.querySelector('[data-lang="en"]').classList.remove('active')
    document.querySelector('[data-lang="jp"]').classList.add('active')
    return dataJP
  }
}

document.querySelector('.language-switcher-item[data-lang="en"]').addEventListener('click', () => {
  document.querySelector('html').setAttribute('lang', 'en')
  langDataSwitcher('', '')
  // loadInformationDetail()
})
document.querySelector('.language-switcher-item[data-lang="jp"]').addEventListener('click', () => {
  document.querySelector('html').setAttribute('lang', 'jp')
  langDataSwitcher('', '')
  // loadInformationDetail()
})

// Navigation Drawer
const hamburgerBtn = document.querySelector('.hamburgerBtn');
const navigationDrawer = document.querySelector('.navigationDrawer');
const closeNavigationBtn = document.querySelector('.closeNavigationBtn');

hamburgerBtn.addEventListener('click', (e) => {
  navigationDrawer.classList.add('show')
  e.currentTarget.classList.add('hide')
  closeNavigationBtn.classList.remove('hide')
})

closeNavigationBtn.addEventListener('click', (e) => {
  navigationDrawer.classList.remove('show')
  e.currentTarget.classList.add('hide')
  hamburgerBtn.classList.remove('hide')
})

// Open Drawer Share
const shareBtn = document.querySelector('.shareBtn')
const shareContainer = document.querySelector('.shareContainer')
const shareDrawer = document.querySelector('.shareDrawer')
shareBtn?.addEventListener('click', (e) => {
  e.stopPropagation()
  shareContainer.classList.toggle('opened');
})

shareDrawer?.addEventListener('click', (e) => {
  e.stopPropagation();
})

// Event Listeners
body.addEventListener('click', () => {
  if (shareContainer.classList.contains('opened')) {
    shareContainer.classList.remove('opened');
  }
});

// Open Drawer Tutorial
const tutorialBtn = document.querySelector('.tutorialBtn')
const tutorialContainer = document.querySelector('.tutorialContainer')
const tutorialDrawer = document.querySelector('.tutorialDrawer')
tutorialBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  tutorialContainer.classList.toggle('opened');
})

tutorialDrawer.addEventListener('click', (e) => {
  e.stopPropagation();
})

// Event Listeners
body.addEventListener('click', () => {
  if (tutorialContainer.classList.contains('opened')) {
    tutorialContainer.classList.remove('opened');
  }
});


// Swiper Tutorial Virtualion
const swiperTutorialVirtualion = new Swiper('.swiper-tutorial-virtualion', {
  // Optional parameters
  // direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 40,
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.nextBtnTutorial',
    prevEl: '.prevBtnTutorial',
  },
  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 1,
    //   spaceBetween: 20
    // },
    // when window width is >= 768px
    // 768: {
    //   slidesPerView: 2,
    //   spaceBetween: 24
    // },
    // when window width is >= 1024px
    // 1024: {
    //   slidesPerView: 3,
    //   spaceBetween: 24
    // }
  }

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

// const swiper = new Swiper('.swiper-testimonial', {
//   navigation: {
//     nextEl: ".swiper-testimonial-button-next",
//     prevEl: ".swiper-testimonial-button-prev",
//   },
//   centeredSlides: true,
//   slidesPerView: 1,
//   loop: true,
//   autoplay: true
// });

swiperTutorialVirtualion.on('realIndexChange', function (e){
  document.querySelectorAll('.tutorialPagination .paginationItem').forEach(el => {
    el.classList.remove('active');
  })
  document.querySelectorAll('.tutorialPagination .paginationItem')[e.realIndex].classList.add('active')

  if(e.realIndex === 0){
    document.querySelector('.tutorialNavigation .prevBtnTutorial').classList.add('disabled')
  } else {
    document.querySelector('.tutorialNavigation .prevBtnTutorial').classList.remove('disabled')
  }

  if(e.realIndex === 3){
    document.querySelector('.tutorialNavigation .nextBtnTutorial').classList.add('disabled')
  } else {
    document.querySelector('.tutorialNavigation .nextBtnTutorial').classList.remove('disabled')
  }
})

// Copy Link 
const shareCopyLinkContainer = document.querySelectorAll('.shareCopyLinkContainer')
shareCopyLinkContainer.forEach(el => {
  const copyLinkButton = el.querySelector('.share-item-link.copyLink')
  const labelCopiedInformation = el.querySelector('.containerLabelCopiedLink')
  copyLinkButton.addEventListener('click', () => {
    labelCopiedInformation.classList.add('show');
    setTimeout(() => {
      labelCopiedInformation.classList.remove('show');
    }, 2000);
    navigator.clipboard.writeText(window.location.href)
  })
})