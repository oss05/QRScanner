// -----------------------------generate QR code-------------------
function htmlEncode(value) {
  return $("<div/>")
    .text(value)
    .html();
}

$(function() {
  $("#generate").click(function() {
    $(".qr-code").attr(
      "src",
      "https://chart.googleapis.com/chart?cht=qr&chl=" +
        htmlEncode($("#content").val()) +
        "&chs=160x160&chld=L|0"
    );
  });
});

// -----------------------------open camera for take qr picture-------------
function showQRIntro() {
  return confirm("Use your camera to take a picture of a QR code.");
}

function openQRCamera(node) {
<<<<<<< HEAD
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
=======
  var reader = new FileReader();
  reader.onload = function() {
    node.value = "";
    qrcode.callback = function(res) {
      if (res instanceof Error) {
        alert(
          "No QR code found. Please make sure the QR code is within the camera's frame and try again."
        );
      } else {
        node.parentNode.previousElementSibling.value = res;
        alert("success! press go button to open your cart.");
        // var url = " " + $("#text").val();
        // window.open(url);
      }
    };
    qrcode.decode(reader.result);
  };
  reader.readAsDataURL(node.files[0]);
}

// --------------------------------open url in tab-------------

  $("#btn").click( function() {
    var url = " " + $("#text").val();
    window.open(url);
});
>>>>>>> osvo
