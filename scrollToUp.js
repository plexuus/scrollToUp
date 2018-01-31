function scrollToUp(scrollByStep) {
  scrollByStep = scrollByStep || -150;

  var timer;
  var scrollTop = Math.max(
    document.body.scrollTop, // Свойство для Chrome, Safari, Opera
    document.documentElement.scrollTop
  );

  if (scrollTop > 0) {
    window.scrollBy(0, scrollByStep);
    timer = setTimeout('scrollToUp()', 20);
  } else clearTimeout(timer);
}

[].forEach.call(
  document.querySelectorAll('.scrollToUp'),
  function (element) {
    element.addEventListener("click", function () {
      scrollToUp();
    });
  }
);