const passWord = document.getElementById("Pass-word");
const iconBtn = document.getElementById("icon");
const btn = document.getElementById("btn")

iconBtn.addEventListener("click", () => {
     if (passWord.type == "password") {
          passWord.type = "text";
     } else {
          passWord.type = "password";
     }
});

btn.addEventListener('click', ()=> {
     alert("Saved Successfully")
})