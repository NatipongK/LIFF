function getUserProfileforUserData() {
    liff.getProfile().then(profile => {
      document.getElementById("displayName").innerHTML = profile.displayName;//get user line name
      document.getElementById("email").value = liff.getDecodedIDToken().email;//get line email
    }).catch(err => console.error(err));
  }

  function getUserProfileforIndex() {
    liff.getProfile().then(profile => {
      document.getElementById("pictureUrl").src = profile.pictureUrl;//get user line picture
      document.getElementById("displayName").innerHTML = profile.displayName;//get user line name
      document.getElementById("getDecodedIDToken").innerHTML = liff.getDecodedIDToken().email;//get user line email
    }).catch(err => console.error(err));
  }
  liff.init({ liffId: "1656217711-49Bo7QWy" }, () => {
    if (liff.isLoggedIn()) {
      getUserProfileforIndex()
      getUserProfileforUserData()
    } else {
      liff.login();
    }
  }, err => console.error(err.code, error.message));


  const txt = '{"card":"01", "account":"a01", "contact":"c01","id":"id01", "scheme":"s01","name":"สุขใจ มีสุข","bdate":"1 มีนาคม 2000", "address":"162 ต.บ้านสวน","phone":"0845649155", "sex":"ชาย", "district":"เมือง", "province":"ชลบุรี", "postcode":"20000"}'
  const obj = JSON.parse(txt);
  document.getElementById("card").innerHTML = obj.card;
  document.getElementById("account").innerHTML = obj.account;
  document.getElementById("contact").innerHTML = obj.contact;
  document.getElementById("id").innerHTML = obj.id;
  document.getElementById("scheme").innerHTML = obj.scheme;
  document.getElementById("sex").innerHTML = obj.sex;
  

  document.getElementById("name").value = obj.name;
  document.getElementById("phone").value = obj.phone;
  document.getElementById("address").value = obj.address;
  document.getElementById("province").value = obj.province;
  document.getElementById("postcode").value = obj.postcode;
  document.getElementById("district").value = obj.district;


  const obj_index = JSON.parse(txt);
  document.getElementById("name").innerHTML = obj.name;
  document.getElementById("phone").innerHTML = obj.phone;
  document.getElementById("bdate").innerHTML = obj.bdate;



  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    console.log( value );

  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
 


//   check_accept_consen1
  function check_1() {
    document.getElementById("myCheck_1").checked = true;
  }
//   check_not_accept_consen1
  function uncheck_1() {
    document.getElementById("myCheck_1").checked = false;
  }
//   check_accept_consen2
  function check_2() {
    document.getElementById("myCheck_2").checked = true;
  }
 //   check_not_accept_consen2
  function uncheck_2() {
    document.getElementById("myCheck_2").checked = false;
  }
//   check_accept_consen3
  function check_3() {
    document.getElementById("myCheck_3").checked = true;
  }
//   check_not_accept_consen3
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