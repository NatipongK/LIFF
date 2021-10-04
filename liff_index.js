function getUserProfile() {
    liff.getProfile().then(profile => {
      document.getElementById("pictureUrl").src = profile.pictureUrl;
      document.getElementById("getDecodedIDToken").innerHTML = liff.getDecodedIDToken().email;
    }).catch(err => console.error(err));
  }
  liff.init({ liffId: "1656217711-49Bo7QWy" }, () => {
    if (liff.isLoggedIn()) {
      getUserProfile()
    } else {
      liff.login();
    }
  }, err => console.error(err.code, error.message));


  