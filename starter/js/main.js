$('.carousel-games').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 5,
  prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.73037 1.71934L2.21348 9.23442L9.73128 16.7495C10.0896 17.1078 10.0896 17.6874 9.73128 18.0457C9.37298 18.4031 8.79249 18.4031 8.43419 18.0457L0.268723 9.88292C-0.0895727 9.52553 -0.0895727 8.94504 0.268723 8.58765L8.43412 0.424892C8.79241 0.067501 9.37381 0.067501 9.73211 0.424892C10.0887 0.781378 10.0887 1.36195 9.73037 1.71934Z" fill="white"/></svg></button>',
  nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.269626 1.5626L7.78652 9.07768L0.268721 16.5928C-0.0895739 16.9511 -0.0895739 17.5306 0.268722 17.8889C0.627017 18.2463 1.20751 18.2463 1.56581 17.8889L9.73128 9.72618C10.0896 9.36879 10.0896 8.7883 9.73128 8.43091L1.56588 0.268154C1.20759 -0.0892373 0.626187 -0.0892373 0.267892 0.268154C-0.0886693 0.62464 -0.0886694 1.20521 0.269626 1.5626Z" fill="white"/></svg></button>',
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});