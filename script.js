let links = JSON.parse(localStorage.answers)

function setCookie(cname, cvalue) {
  //const d = new Date();
  //d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
 // let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" ;
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(name) {
  let value = getCookie(name);
  if (value != "") {
    return true;
  } else {
    return false
  }
}
let end=parseInt(getCookie("end"));
if(!getCookie("counter")){
    
  setCookie("counter",1)
}else{
  setCookie("counter",parseInt(getCookie("counter"))+1)
}
function appeal(){

  if(!getCookie("cursor")){
    
    setCookie("cursor",0)
  }

let email =document.querySelector("#request_anonymous_requester_email")
email.value=getCookie("email")

let title=document.querySelector("#request_subject")
title.value=getCookie("subject")

let description = document.querySelector("#request_description")

description.value= getCookie("description")
let click  = document.querySelector("#new_request > div.form-field.string.required.request_custom_fields_25419166 > a")
click.click()
document.querySelector("#flagged_question").click()

let name =document.querySelector("#request_custom_fields_25368063")
name.value=getCookie("name")
let link = document.querySelector("#request_custom_fields_360039199971")
let cursor=parseInt(getCookie("cursor"))

if (cursor>=end){
  alert("finished")
}
else{
  link.value=links[cursor]["Link"]
 
  setCookie("cursor",cursor+1)
  document.querySelector("#new_request > footer > input[type=submit]").click()
}

}

appeal()
