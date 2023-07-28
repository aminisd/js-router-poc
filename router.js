// router.js
function renderContent(page) {
    const contentDiv = document.getElementById("content");

    // The innerHtml can actually be used render much a whole page. But we will not go deeper in this POC
  
    switch (page) {
      case "/about":
        contentDiv.innerHTML = "<h1>About Page</h1>";
        break;
      case "/contact":
        contentDiv.innerHTML = "<h1>Contact Page</h1>";
        break;
      default:
        contentDiv.innerHTML = "<h1>Home Page</h1>";
        break;
    }
  }
  
  function handleRoute() {
    const hash = window.location.hash.slice(1); // Get the current URL hash
    renderContent(hash);
  }
  
  // Initial route handling
  handleRoute();
  
  // Add an event listener for hash changes to handle client-side navigation
  window.addEventListener("hashchange", handleRoute);
  