document.addEventListener('DOMContentLoaded', function() {

document.querySelector('#apeal').addEventListener('click', function(){

    chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
        chrome.scripting.executeScript(
          {
            target: {tabId: tab.id},
            files: ['script.js'],
            
          })
      })

  });
  document.querySelector('#config').addEventListener('click', function(){


    chrome.cookies.set({
      "name": "Sample1",
      "url": "https://help.quora.com/hc/en-us/requests/new?ticket_form_id=198746",
      "value": "Dummy Data"
  }, function (cookie) {
      console.log(JSON.stringify(cookie));
      console.log(chrome.extension.lastError);
      console.log(chrome.runtime.lastError);
  });
    
     

  });
})