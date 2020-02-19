let blueBTN = document.getElementById('blueBTN');
let greenBTN = document.getElementById('greenBTN');
let blackBTN = document.getElementById('blackBTN');
let whiteBTN = document.getElementById('whiteBTN');
let extensionNameH1 = document.getElementById('extensionNameH1');

var changeColour = function(colour){
  chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
    chrome.tabs.executeScript(
      tabs[0].id,
      {code:'document.body.style.backgroundColor = "'+colour+'";'},
      function(){});
  });
};

blueBTN.addEventListener('click', function(e){
  changeColour('blue');
});
greenBTN.addEventListener('click', function(e){
  changeColour('green');
});
blackBTN.addEventListener('click', function(e){
  changeColour('black');
});
whiteBTN.addEventListener('click', function(e){
  changeColour('white');
});

function load_extension_name(){
  chrome.storage.sync.get(['extensionText'], function(result) {
    if(result.extensionText != undefined){
      extensionNameH1.innerHTML = result.extensionText;
    }
  });
}

document.addEventListener('DOMContentLoaded',load_extension_name);
