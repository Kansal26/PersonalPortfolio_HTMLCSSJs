var typed = new Typed('#element', {
    strings: ['Web Developer.', 'Graphic Designer.', 'Web Designer.'],
    typeSpeed: 70,
  });
let message_btn = document.getElementById("message_btn");
let message_box = document.getElementById("message_box");
let name_box = document.getElementById("name");
let email_box = document.getElementById("email");
message_btn.onclick = () => {
    console.log("hello");
    message_box.value = "";
    name_box.value = "";
    email_box.value = "";
    message_btn.innerText = "ThankYou";
    message_box.disabled = true;
    name_box.disabled = true;
    email_box.disabled = true;
}
