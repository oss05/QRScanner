$('.generate-qr-code').on('click', function(){

  // Clear Previous QR Code
  $('#qrcode').empty();
  
  // Set Size to Match User Input
  $('#qrcode').css({
  'width' : $('.qr-size').val(),
  'height' : $('.qr-size').val()
  })
  
  // Generate and Output QR Code
  $('#qrcode').qrcode({width: $('.qr-size').val(),height: $('.qr-size').val(),text: $('.qr-url').val()});
  
  });




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
          node.parentNode.previousElementSibling.value = res;
        }
      };
      qrcode.decode(reader.result);
    };
    reader.readAsDataURL(node.files[0]);
  }