document.addEventListener('DOMContentLoaded', function() {

  chrome.cookies.get(
    {
      "name": "counter",
      "url": "https://help.quora.com/hc/en-us/requests/new?ticket_form_id=198746",
      
  }, function (cookie) {
    document.querySelector('#passed').innerHTML=cookie.value;
  }
  )
  chrome.cookies.get(
    {
      "name": "cursor",
      "url": "https://help.quora.com/hc/en-us/requests/new?ticket_form_id=198746",
  }, function (cookie) {
      document.querySelector('#position').innerHTML=cookie.value;
  }
  )
  

document.querySelector('#apeal').addEventListener('click', function(){

    chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
        chrome.scripting.executeScript(
          {
            target: {tabId: tab.id},
            files: ['script.js'],
            
          })
      })

  });
  document.getElementById('inputfile')
            .addEventListener('change', function () {

                let fr = new FileReader();
                fr.onload = function () {

                  chrome.storage.sync.set({ "data": "ali" }).then(() => {
                    document.getElementById("done").innerHTML="done";
                  
              
              });
                    
                }
                
                fr.readAsText(this.files[0]);
            })
  document.querySelector('#config').addEventListener('click', function(){

    let email=document.querySelector('#email').value
    let subject=document.querySelector('#subject').value 
    let description=document.querySelector('#description').value 
    let name=document.querySelector('#name').value 
    let end=document.querySelector('#end').value 
    let cursor=document.querySelector('#cursor').value 
    chrome.cookies.set({
      "name": "email",
      "url": "https://help.quora.com/hc/en-us/requests/new?ticket_form_id=198746",
      "value": email
  }, function (cookie) {
      
  });
  chrome.cookies.set({
    "name": "subject",
    "url": "https://help.quora.com/hc/en-us/requests/new?ticket_form_id=198746",
    "value": subject
}, function (cookie) {

});
chrome.cookies.set({
  "name": "description",
  "url": "https://help.quora.com/hc/en-us/requests/new?ticket_form_id=198746",
  "value": description
}, function (cookie) {
 
});
chrome.cookies.set({
  "name": "name",
  "url": "https://help.quora.com/hc/en-us/requests/new?ticket_form_id=198746",
  "value": name
}, function (cookie) {

});
chrome.cookies.set({
  "name": "cursor",
  "url": "https://help.quora.com/hc/en-us/requests/new?ticket_form_id=198746",
  "value": cursor
}, function (cookie) {

});
chrome.cookies.set({
  "name": "end",
  "url": "https://help.quora.com/hc/en-us/requests/new?ticket_form_id=198746",
  "value": end
}, function (cookie) {
 
});
    
     

  });
})