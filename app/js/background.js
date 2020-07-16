
chrome.runtime.onInstalled.addListener(function() {
   console.log('xss-session-hijack installed')
});

chrome.tabs.onUpdated.addListener(function(id, changeInfo) {

  if(changeInfo.status === 'complete'){

    chrome.tabs.executeScript(id, {
      allFrames: true,
      file: 'app/js/main.js'
    });
  }

});
