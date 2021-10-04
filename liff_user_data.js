function getUserProfile() {
    liff.getProfile().then(profile => {
      document.getElementById("userId").innerHTML = profile.userId;
      document.getElementById("displayName").innerHTML = profile.displayName;
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


  const txt = '{"card":"01", "account":"a01", "contact":"c01","id":"id01", "scheme":"s01","name":"สุขใจ มีสุข", "address":"162 ต.นนน อ.เมือง จ.กรุงเทพฯ","phone":"0845649155", "email":"suujai@hotmail.com", "bdate":"10/05/1999"}'
  const obj = JSON.parse(txt);
  document.getElementById("card").innerHTML = obj.card;
  document.getElementById("account").innerHTML = obj.account;
  document.getElementById("contact").innerHTML = obj.contact;
  document.getElementById("id").innerHTML = obj.id;
  document.getElementById("scheme").innerHTML = obj.scheme;
  document.getElementById("name").value = obj.name;
  document.getElementById("phone").value = obj.phone;



  function onSubmit(form) {
    var data = JSON.stringify($(form).serializeArray());

    console.log(data);
    return false; 
  }



  function check_1() {
    document.getElementById("myCheck_1").checked = true;
  }

  function uncheck_1() {
    document.getElementById("myCheck_1").checked = false;
  }

  function check_2() {
    document.getElementById("myCheck_2").checked = true;
  }

  function uncheck_2() {
    document.getElementById("myCheck_2").checked = false;
  }

  function check_3() {
    document.getElementById("myCheck_3").checked = true;
  }

  function uncheck_3() {
    document.getElementById("myCheck_3").checked = false;
  }
  // Get the button that opens the modal
  var btn = document.querySelectorAll("a.modal-button");

  // All page modals
  var modals = document.querySelectorAll('.modal');

  // Get the <span> element that closes the modal
  var spans = document.getElementsByClassName("close");

  // When the user clicks the button, open the modal
  for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
      e.preventDefault();
      modal = document.querySelector(e.target.getAttribute("href"));
      modal.style.display = "block";
    }
  }

  // When the user clicks on <span> (x), close the modal
  for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
      for (var index in modals) {
        if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
      }
    }
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
      for (var index in modals) {
        if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
      }
    }
  }