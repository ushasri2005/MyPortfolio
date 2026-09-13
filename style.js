// SHOW DIFFERENT PORTFOLIO PAGES

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

}


// SHOW OR HIDE MARKSHEET IMAGE

function showMarksheet(imageId) {

    const imageContainer = document.getElementById(imageId);

    if (!imageContainer) {
        console.log("Marksheet container not found");
        return;
    }

    if (imageContainer.style.display === "none") {

        imageContainer.style.display = "block";

    } else {

        imageContainer.style.display = "none";

    }

}


// SHOW HOME PAGE WHEN WEBSITE LOADS

window.onload = function() {

    showPage("home");

};