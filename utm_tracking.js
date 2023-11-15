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

// Set Local Storage
  if (utm_source != ''){
    localStorage.setItem("utm_source", utm_source);
  }
  if (utm_campaign != ""){
    localStorage.setItem("utm_campaign", utm_campaign);
  }
  if (utm_term != ""){
    localStorage.setItem("utm_term", utm_term);
  }
  if (utm_content != ""){
    localStorage.setItem("utm_content", utm_content);
  }
  if (utm_medium != ""){
    localStorage.setItem("utm_medium", utm_medium);
  }
  if (utm_adgroup != ""){
    localStorage.setItem("utm_adgroup", utm_adgroup);
  }
  if (utm_gclid != ""){
    localStorage.setItem("utm_gclid", utm_gclid);
  }
  if (utm_keyword != ""){
    localStorage.setItem("utm_keyword", utm_keyword);
  }

  // Set cookie
  if (localStorage.getItem("utm_source") != ''){
    document.cookie = "utm_source=" + localStorage.getItem("utm_source");
  }
  if (localStorage.getItem("utm_campaign") != ''){
    document.cookie = "utm_campaign=" + localStorage.getItem("utm_campaign");
  }
  if (localStorage.getItem("utm_term") != ''){
    document.cookie = "utm_term=" + localStorage.getItem("utm_term");
  }
  if (localStorage.getItem("utm_content") != ''){
    document.cookie = "utm_content=" + localStorage.getItem("utm_content");
  }
  if (localStorage.getItem("utm_medium") != ''){
    document.cookie = "utm_medium=" + localStorage.getItem("utm_medium");
  }
  if (localStorage.getItem("utm_adgroup") != ''){
    document.cookie = "utm_adgroup=" + localStorage.getItem("utm_adgroup");
  }
  if (localStorage.getItem("utm_gclid") != ''){
    document.cookie = "utm_gclid=" + localStorage.getItem("utm_gclid");
  }
  if (localStorage.getItem("utm_keyword") != ''){
    document.cookie = "utm_keyword=" + localStorage.getItem("utm_keyword");
  }