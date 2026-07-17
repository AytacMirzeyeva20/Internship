const form=document.getElementById("form")
form.addEventListener("submit",function(e){
    e.preventDefault();
const name=document.getElementById("name").value;
const gmail=document.getElementById("gmail").value;
const subject=document.getElementById("subject").value;
const message=document.getElementById("message").value;
console.log("Name",name);
console.log("Gmail",gmail);
console.log("Subject",subject);
console.log("Message",message);
alert("Message sent succesfully!")
form.reset()
})
