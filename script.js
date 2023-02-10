const q = document.getElementsByClassName("q");
const a = document.getElementsByClassName("a");
const arr = document.getElementsByClassName("arrow");

for(let i = 0; i < q.length; i++) {
    q[i].addEventListener("click", () => {
        a[i].classList.toggle("a-opened");
        arr[i].classList.toggle("arrow-rotated");     
    });
} 

const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector(".nav-menu"); 

navToggle.addEventListener("click", function onClick(event) {
    navMenu.classList.toggle("nav-menu-visible")
}) 

const wellBeingBtn = document.getElementsByClassName("well-being-button")[0];
const writingBtn = document.getElementsByClassName("writing-button")[0];
const gamingBtn = document.getElementsByClassName("gaming-button")[0];
const cultureBtn = document.getElementsByClassName("culture-button")[0];
const musicBtn = document.getElementsByClassName("music-button")[0];
const newsBtn = document.getElementsByClassName("news-button")[0];
const politicsBtn = document.getElementsByClassName("politics-button")[0];

const articleBrowser = document.getElementsByClassName("article-browser")[0];

if (window.innerWidth < 600) {
    articleBrowser.innerHTML = '<img src="wellbeing-phone-article.svg" alt="News article">';
    wellBeingBtn.classList.add("active-button");
  } else {
    articleBrowser.innerHTML = '<img src="well-being-pc-article.svg" alt="News article">';
    wellBeingBtn.classList.add("active-button");
  }
    

wellBeingBtn.addEventListener("click", function() {
    if (window.innerWidth > 600) {
        articleBrowser.innerHTML = '<img src="well-being-pc-article.svg" alt="Well being article">';
    } else {
        articleBrowser.innerHTML = '<img src="wellbeing-phone-article.svg" alt="Well being article">';
    }
    wellBeingBtn.classList.add("active-button");
    writingBtn.classList.remove("active-button");
    gamingBtn.classList.remove("active-button");
    cultureBtn.classList.remove("active-button");
    musicBtn.classList.remove("active-button");
    newsBtn.classList.remove("active-button");
    politicsBtn.classList.remove("active-button");
});

writingBtn.addEventListener("click", function() {
    if (window.innerWidth > 600) {
        articleBrowser.innerHTML = '<img src="literature-pc-article.svg" alt="Writing article">';
    } else {
        articleBrowser.innerHTML = '<img src="literature-phone-article.svg" alt="Writing article">';
    }
    wellBeingBtn.classList.remove("active-button");
    writingBtn.classList.add("active-button");
    gamingBtn.classList.remove("active-button");
    cultureBtn.classList.remove("active-button");
    musicBtn.classList.remove("active-button");
    newsBtn.classList.remove("active-button");
    politicsBtn.classList.remove("active-button");
});

gamingBtn.addEventListener("click", function() {
    if (window.innerWidth > 600) {
        articleBrowser.innerHTML = '<img src="gaming-pc-article.svg" alt="Gaming article">';
    } else {
        articleBrowser.innerHTML = '<img src="gaming-phone-article.svg" alt="Gaming article">';
    }
    wellBeingBtn.classList.remove("active-button");
    writingBtn.classList.remove("active-button");
    gamingBtn.classList.add("active-button");
    cultureBtn.classList.remove("active-button");
    musicBtn.classList.remove("active-button");
    newsBtn.classList.remove("active-button");
    politicsBtn.classList.remove("active-button");
});

cultureBtn.addEventListener("click", function() {
    if (window.innerWidth > 600) {
        articleBrowser.innerHTML = '<img src="culture-pc-article.svg" alt="Culture article">';
    } else {
        articleBrowser.innerHTML = '<img src="culture-phone-article.svg" alt="Culture article">';
    }
    cultureButton.classList.add("active");
    wellBeingBtn.classList.remove("active-button");
    writingBtn.classList.remove("active-button");
    gamingBtn.classList.remove("active-button");
    cultureBtn.classList.add("active-button");
    musicBtn.classList.remove("active-button");
    newsBtn.classList.remove("active-button");
    politicsBtn.classList.remove("active-button");
});

musicBtn.addEventListener("click", function() {
    if (window.innerWidth > 600) {
        articleBrowser.innerHTML = '<img src="music-pc-article.svg" alt="Music article">';
    } else {
        articleBrowser.innerHTML = '<img src="music-phone-article.svg" alt="Music article">';
    }
    wellBeingBtn.classList.remove("active-button");
    writingBtn.classList.remove("active-button");
    gamingBtn.classList.remove("active-button");
    cultureBtn.classList.remove("active-button");
    musicBtn.classList.add("active-button");
    newsBtn.classList.remove("active-button");
    politicsBtn.classList.remove("active-button");
});

newsBtn.addEventListener("click", function() {
    if (window.innerWidth > 600) {
        articleBrowser.innerHTML = '<img src="news-pc-article.svg" alt="News article">';
    } else {
        articleBrowser.innerHTML = '<img src="news-phone-article.svg" alt="News article">';
    }
    wellBeingBtn.classList.remove("active-button");
    writingBtn.classList.remove("active-button");
    gamingBtn.classList.remove("active-button");
    cultureBtn.classList.remove("active-button");
    musicBtn.classList.remove("active-button");
    newsBtn.classList.add("active-button");
    politicsBtn.classList.remove("active-button");
});

politicsBtn.addEventListener("click", function() {
    if (window.innerWidth > 600) {
        articleBrowser.innerHTML = '<img src="politics-pc-article.svg" alt="Politics article">';
    } else {
        articleBrowser.innerHTML = '<img src="politics-phone-article.svg" alt="Politics article">';
    }
    wellBeingBtn.classList.remove("active-button");
    writingBtn.classList.remove("active-button");
    gamingBtn.classList.remove("active-button");
    cultureBtn.classList.remove("active-button");
    musicBtn.classList.remove("active-button");
    newsBtn.classList.remove("active-button");
    politicsBtn.classList.add("active-button");v
}); 

$(document).ready(function() {
    $("a[href='#product-section']").click(function(e) {
      e.preventDefault();
      var headerHeight = 125;
      $("html, body").animate({
        scrollTop: $("#product-section").offset().top - headerHeight
      }, 10);
    });
  });

  $(document).ready(function() {
    $("a[href='#solution-section']").click(function(e) {
      e.preventDefault();
      var headerHeight = 125;
      $("html, body").animate({
        scrollTop: $("#solution-section").offset().top - headerHeight
      }, 10);
    });
  });

  $(document).ready(function() {
    $("a[href='#resources-section']").click(function(e) {
      e.preventDefault();
      var headerHeight = 125;
      $("html, body").animate({
        scrollTop: $("#resources-section").offset().top - headerHeight
      }, 10);
    });
  });

  $(document).ready(function() {
    $("a[href='#pricing-section']").click(function(e) {
      e.preventDefault();
      var headerHeight = 125;
      $("html, body").animate({
        scrollTop: $("#pricing-section").offset().top - headerHeight
      }, 10);
    });
  });