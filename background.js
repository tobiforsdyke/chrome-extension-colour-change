chrome.runtime.onInstalled.addListener(function() {

        chrome.storage.sync.set({color: '#356980'}, function() {
          console.log('colour was stored in storage');
        });

});
