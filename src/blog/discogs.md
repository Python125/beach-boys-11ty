---
title: Discography
author: Andrew Novosel
date: 2023-09-13
tags: ["post", "featured"]
description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium sit illo neque rem omnis quaerat, nam similique vitae delectus ad magni vel quo maxime, magnam placeat. Reprehenderit, distinctio aliquam?
---

<body style="background-color: black; color: white">
  <button id="modalBtn">Open</button>
  <div id="modal1" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <p>Surfin' Safari (1962)</p>
    </div>
  </div>

  <script>
    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
  </script>
</body>
