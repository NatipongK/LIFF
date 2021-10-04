function getUserProfile() {
    liff.getProfile().then(profile => {
      document.getElementById("pictureUrl").src = profile.pictureUrl;//get user line picture
      document.getElementById("displayName").innerHTML = profile.displayName;//get user line name
      document.getElementById("getDecodedIDToken").innerHTML = liff.getDecodedIDToken().email;//get user line email
    }).catch(err => console.error(err));
  }
  liff.init({ liffId: "1656217711-49Bo7QWy" }, () => {
    if (liff.isLoggedIn()) {
      getUserProfile()
    } else {
      liff.login();
    }
  }, err => console.error(err.code, error.message));


  