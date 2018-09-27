// console.log("Working?");
// (function() {
//   'use strict';
//
//   // YOUR CODE HERE
//   var stopButton = document.getElementById('stopButton');
//   var stopLight = document.getElementById('stopLight');
//   stopButton.addEventListener('click', function(){
//     stopLight.classList.toggle('stop');
//   });
//   var slowButton = document.getElementById('slowButton');
//   var slowLight = document.getElementById('slowLight');
//   slowButton.addEventListener('click', function(){
//     slowLight.classList.toggle('slow');
//   })
//   var goButton = document.getElementById('goButton');
//   var goLight = document.getElementById('goLight');
//   goButton.addEventListener('click', function(){
//     goLight.classList.toggle('go');
//   })
// })();

































(function() {
  // 'use strict';
  const stopButton = document.getElementById('stopButton');
  const slowButton = document.getElementById('slowButton');
  const goButton = document.getElementById('goButton');

  const stopLight = document.getElementById('stopLight');
  const slowLight = document.getElementById('slowLight');
  const goLight = document.getElementById('goLight');



  stopButton.addEventListener('click', function(e){
    if (!stopLight.classList.contains('stop')){
      stopLight.classList.add('stop')
    } else {
      stopLight.classList.remove('stop')
    }

  })



slowButton.addEventListener('click', function(e){
  if (!slowLight.classList.contains('slow')){
    slowLight.classList.add('slow')
  } else {
    slowLight.classList.remove('slow')
  }

})

goButton.addEventListener('click', function(e){
  if (!goLight.classList.contains('go')){
    goLight.classList.add('go')
  } else {
    goLight.classList.remove('go')
  }

})



})();
