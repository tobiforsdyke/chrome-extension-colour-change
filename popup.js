let clickmeBTN = document.getElementById('clickmeBTN');
let extensionNameH1 = document.getElementById('extensionNameH1');

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

function load_extension_name(){
  chrome.storage.sync.get(['extensionText'], function(result) {
    if(result.extensionText != undefined){
      extensionNameH1.innerHTML = result.extensionText;
    }
  });
}

document.addEventListener('DOMContentLoaded',load_extension_name);
