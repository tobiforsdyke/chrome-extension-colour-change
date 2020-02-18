let extensionNameInput = document.getElementById('extensionNameInput');
let saveBTN = document.getElementById('saveBTN');

function save_text(){
  var text = extensionNameInput.value;
  chrome.storage.sync.set({extensionText: text}, function() {
    alert('text has been saved');
  });
}

function load_text(){
  chrome.storage.sync.get(['extensionText'], function(result) {
    if(result.extensionText != undefined){
      alert(result.extensionText);
      extensionNameInput.value = result.extensionText;
    }
  });
}

document.addEventListener('DOMContentLoaded',load_text);
saveBTN.addEventListener('click',save_text);
