let clickmeBTN = document.getElementById('clickmeBTN')

var changeColour = function(colour){
  chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
    chrome.tabs.executeScript(
      tabs[0].id,
      {code:'document.body.style.backgroundColor = "'+colour+'";'},
      function(){});
  });
};


clickmeBTN.addEventListener('click', function(e){
  changeColour('blue');
});
