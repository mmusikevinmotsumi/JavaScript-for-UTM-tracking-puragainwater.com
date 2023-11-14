// Retrieve my current url parameters
function getParameterByName(theParameter) {
  var params = window.location.search.substr(1).split('&');
  for (var i = 0; i < params.length; i++) {
    var p=params[i].split('=');
     if (p[0] == theParameter) {
      return decodeURIComponent(p[1]);
    }
  }
  return "";
}
  
// Give the URL parameters variable names
var utm_source = getParameterByName('utm_source');
var utm_medium = getParameterByName('utm_medium');
var utm_campaign = getParameterByName('utm_campaign');
var utm_term = getParameterByName('utm_term');
var utm_content = getParameterByName('utm_content');
var utm_adgroup = getParameterByName('utm_adgroup');
var utm_gclid = getParameterByName('utm_gclid');
var utm_keyword = getParameterByName('utm_keyword');

// Set the cookies
  if (getCookie("utm_source")== null || getCookie("utm_source")== ""){
    document.cookie = "utm_source=" + utm_source;
  }
  if (getCookie("utm_campaign")== null || getCookie("utm_campaign")== ""){
    document.cookie = "utm_campaign=" + utm_campaign;
  }
  if (getCookie("utm_term")== null || getCookie("utm_term")== ""){
    document.cookie = "utm_term=" + utm_term;
  }
  if (getCookie("utm_content")== null || getCookie("utm_content")== ""){
    document.cookie = "utm_content=" + utm_content;
  }
  if (getCookie("utm_medium")== null || getCookie("utm_medium")== ""){
    document.cookie = "utm_medium=" + utm_medium;
  }
  if (getCookie("utm_adgroup")== null || getCookie("utm_adgroup")== ""){
    document.cookie = "utm_adgroup=" + utm_adgroup;
  }
  if (getCookie("utm_gclid")== null || getCookie("utm_gclid")== ""){
    document.cookie = "utm_gclid=" + utm_gclid;
  }
  if (getCookie("utm_keyword")== null || getCookie("utm_keyword")== ""){
    document.cookie = "utm_keyword=" + utm_keyword;
  }

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}