document.addEventListener('DOMContentLoaded',function(){
  var b=document.querySelector('.burger'),n=document.querySelector('.nav');
  if(b&&n){b.addEventListener('click',function(){
    var o=n.classList.toggle('open');
    b.setAttribute('aria-expanded',o?'true':'false');
  });}
  document.querySelectorAll('.nav-group > button').forEach(function(t){
    t.addEventListener('click',function(e){
      if(window.innerWidth<=940){e.preventDefault();t.parentElement.classList.toggle('open');}
    });
  });
});
