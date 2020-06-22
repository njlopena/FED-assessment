fetch('items.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Product: ' + data[i].pescription + ' ' + data[i].price;
    mainContainer.appendChild(div);
  }
}


const Item1 = 129;
const Item2 = 59;
const Item3 = 249;
const Item4 = 79;
const Item5 = 149;
const Item6 = 279;
const Item7 = 249;
const Item8 = 249;
const Item9 = 399;
const Item10 = 10;
const Item11 = 10;
const Item12 = 25;











// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function checkoutfunc() {
  alert("Order processed. Thank you for Shopping with us!");
}


function addcart() {
  var total = Item1;
  return (total);
}