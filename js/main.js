function showQRIntro(){
  return confirm("Use your camera to take a picture of a QR code.");
}


function openQRCamera(node) {
    var reader = new FileReader();
    reader.onload = function() {
      node.value = "";
      qrcode.callback = function(res) {
        if(res instanceof Error) {
          alert("No QR code found. Please make sure the QR code is within the camera's frame and try again.");
        } else {
          node.parentNode.previousElementSibling.value = res
          alert('success!')
          var url = " " + $("#text").val();
          window.open(url);
        }
      };
      qrcode.decode(reader.result);
    };
    reader.readAsDataURL(node.files[0]);
  }

//   $("#btn").click( function() {
//     var url = " " + $("#text").val();
//     window.open(url);
// });