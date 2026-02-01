function passwordclick() {
  let pass = document.getElementById("password");

  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}
function psclick() {
  let pass = document.getElementById("ps");

  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let coin = parseFloat(document.getElementById("coin").innerText);

  document.getElementById("prodact-shop-snai3ii")
    .addEventListener("click", function(e) {
      if (!e.target.classList.contains("buy")) return;

      let price = parseFloat(e.target.dataset.price);

      if (coin >= price) {
        coin -= price;

        document.getElementById("coin").innerText = coin.toFixed(1);

        let scoreEl = document.getElementById("score");
        if (scoreEl) scoreEl.innerText = coin.toFixed(1);
        
      Swal.fire({
        title: "Good job!",
        text: "✔ Purchase completed",
        icon: "success",
        confirmButtonColor: "#f2a807",
          customClass: {
            popup: "alert-up"
          }

      });
      } else {
      Swal.fire({
        title: "Oh!",
        text: "❌ Not enough coins",
        icon: "error",
        confirmButtonColor: "#f2a807",
        customClass: {
          popup: "alert-up"
        }

      });
      }
  });
});



  document.querySelectorAll(".btn-earn").forEach(button => {
    button.addEventListener("click", () => {

      let card = button.closest(".ear");
      let fileInput = card.querySelector(".file");
      let price = parseFloat(button.dataset.price);

      if (!fileInput.files.length) {
        Swal.fire({
          icon: "warning",
          title: "Warning",
          text: "Please select a file first 📁",
          confirmButtonColor: "#f2a807",
          customClass: {
            popup: "alert-up"
          }

        });
        return;
      }

      Swal.fire({
        title: "Processing...",
        text: "Please wait",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
          confirmButtonColor: "#f2a807",
          customClass: {
            popup: "alert-up"
          }

      });

      setTimeout(() => {

        let coin = parseFloat(document.getElementById("coin").innerText);

        coin += price;

        document.getElementById("coin").innerText = coin.toFixed(1);

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: `You earned ${price} coin(s)`,
          confirmButtonColor: "#f2a807",
          customClass: {
            popup: "alert-up"
          }
        });

        fileInput.value = "";

      }, 2000);
    });
  });




  let text = "Complete tasks, upload your work, and earn coins";
  let title = document.getElementById("typing-title");

let index = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting) {
    title.innerText = text.substring(0, index + 1);
    index++;

    if (index === text.length) {
      setTimeout(() => isDeleting = true, 1500); 
    }
  } else {
    title.innerText = text.substring(0, index - 1);
    index--;

    if (index === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeEffect, isDeleting ? 40 : 80);
}

typeEffect();


function confirm() {
  Swal.fire({
    title: 'Please wait...',
    text: 'Processing your request',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  setTimeout(() => {
    Swal.fire({
      icon: 'success',
      title: 'Accepted',
      text: 'The operation was completed successfully',
          customClass: {
        popup: "alert-up"
    }


    });

     setTimeout(() => {
      window.location.href = "snai3i-shop.html";
    }, 1500);
  }, 2000);
}


function login(){
  let username = document.querySelector("[data-username]").value.trim();

localStorage.setItem("username", username);

}
function confirmRequest(){
  let username = document.querySelector("[data-username]").value.trim();

localStorage.setItem("username", username);

}



function showName() {
  let username = localStorage.getItem("username");
  let coin = localStorage.getItem("coin") || 
             document.getElementById("coin").innerText;

  if (!username) {
    Swal.fire({
      icon: "warning",
      title: "Not logged in",
      text: "Please login first",
      confirmButtonColor: "#f2a807",
          customClass: {
        popup: "alert-up"
    }


    });
    return;
  }

  Swal.fire({
    title: "👤 Profile",
    html: `
      <p><b>Name:</b> ${username}</p>
      <p><b>Coins:</b> ${coin}</p>
    `,
    icon: "info",
    confirmButtonColor: "#f2a807",
    customClass: {
        popup: "alert-up"
    }

  });
}
