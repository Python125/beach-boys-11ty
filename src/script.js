window.addEventListener("load", () => {
  const homeImage = document.querySelector(".home-image");

  homeImage.style.opacity = "0";
  homeImage.style.transform = "translateY(-100%)";

  setTimeout(() => {
    homeImage.style.opacity = "1";
    homeImage.style.transform = "translateY(0)";
  }, 1000);
});

window.addEventListener("load", () => {
  const homeText = document.querySelector(".home-text");

  homeText.style.opacity = "0";
  homeText.style.transform = "translateY(100%)";

  setTimeout(() => {
    homeText.style.opacity = "1";
    homeText.style.transform = "translateX(0)";
  }, 2000);
});

window.addEventListener("load", () => {
  const homeButton = document.querySelector(".home-btn");

  homeButton.style.opacity = "0";
  homeButton.style.transform = "translateX(-100%)";

  setTimeout(() => {
    homeButton.style.opacity = "1";
    homeButton.style.transform = "translateX(0)";
  }, 3000);
});

window.addEventListener("load", () => {
  const blogImage = document.querySelector(".blog-image");

  setTimeout(() => {
    blogImage.style.opacity = "1";
    blogImage.style.transform = "translateX(0)";
  }, 500);
});

window.addEventListener("load", () => {
  const blogText1 = document.querySelector(".blog-text1");

  blogText1.style.opacity = "0";
  blogText1.style.transform = "translateY(1000vh)";

  setTimeout(() => {
    blogText1.style.opacity = "1";
    blogText1.style.transform = "translateY(0)";
  }, 550);
});

window.addEventListener("load", () => {
  const blogText2 = document.querySelector(".blog-text2");

  blogText2.style.opacity = "0";
  blogText2.style.transform = "translateY(1000vh)";

  setTimeout(() => {
    blogText2.style.opacity = "1";
    blogText2.style.transform = "translateY(0)";
  }, 1200);
});