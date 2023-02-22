function animateText() {
    const header = document.getElementById("my-header");
    const text = header.textContent;
    header.textContent = "";
  
    for (let i = 0; i < text.length; i++) {
      setTimeout(function() {
        header.textContent += text[i];
      }, 100 * i);
    }
  }


  function animateBodyText() {
    const header = document.getElementById("my-header2");
    const text = header.textContent;
    header.textContent = "";
  
    for (let i = 0; i < text.length; i++) {
      setTimeout(function() {
        header.textContent += text[i];
      }, 100 * i);
    }
  }


  window.addEventListener("load", animateText);
  window.addEventListener("load", animateBodyText);