var clientId = '699883145940-bd1qtn854ok1c8t74ggr7uvddnnpas48.apps.googleusercontent.com';
var apiKey = 'AIzaSyCTb9ibVTxtRHIeLlMYU5gSi1OjTWDgxBk';
var scopes = 'https://www.googleapis.com/auth/calendar';

// http://localhost:8000

function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth,1);
  checkAuth();
}

function checkAuth() {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true},
      handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById('authorize-button');
  if (authResult) {
    // authorizeButton.style.visibility = 'hidden';
    makeApiCall();
  } else {
    authorizeButton.style.visibility = '';
    authorizeButton.onclick = handleAuthClick;
   }
}

function handleAuthClick(event) {
  gapi.auth.authorize(
      {client_id: clientId, scope: scopes, immediate: false},
      handleAuthResult);
  return false;
}