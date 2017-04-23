//document.getElementById("hide").addEventListener('click', function () {
//   document.getElementById("update-container").classList.add('displaynone');
//});


//////////////// POURCENTAGE DE LECTURE


function getPercentage() {
  var percentage = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight))*100;
  return percentage;
}

window.addEventListener("scroll", function() {
  document.getElementById('mobile-scoll-nav-advancement').style.width = getPercentage()+'%';

  var scrollHeight = document.body.scrollTop;

  if (scrollHeight > 100) {
    document.body.classList.add("scrolled");
  }
});
