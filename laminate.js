//mail copy

let copy=function(event){
  const textToCopy = "milantraders.in@gmail.com";
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log("Text copied successfully: " + textToCopy);
      })
      .catch((error) => {
        console.error("Unable to copy text: ", error);
      });
  } else {
    console.error("Clipboard API not supported");
    console.log("hi");
  }
}

const copyButton = document.querySelectorAll(".copymail");
for(var i = 0; i < copyButton.length; i++)
{
  copyButton[i].addEventListener('click', copy, false);
}

document.addEventListener('DOMContentLoaded', function() {
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
  })
})

//mail copy end



const menu = document.querySelector('#menu');
const hidemenu = document.querySelector('#hidemenu');
const sidebar = document.querySelector('.sidebar');
menu.addEventListener("click" , ()=>{
    sidebar.style.display = "flex"
})
hidemenu.addEventListener("click" , ()=>{
    sidebar.style.display = "none"
})


function showContent(contentId) {
    // Hide all content sections
    var contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(function(section) {
        section.style.display = 'none';
    });
    // Show the selected content section
    var selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
}

