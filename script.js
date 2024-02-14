const passWord = document.getElementById("Pass-word");
const iconBtn = document.getElementById("icon");

iconBtn.addEventListener("click", () => {
     if (passWord.type == "password") {
          passWord.type = "text";
     } else {
          passWord.type = "password";
     }
});
