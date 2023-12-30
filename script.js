var logoImage = document.getElementById("logoImage");
if (logoImage) {
    logoImage.addEventListener("click", function () {
        window.location.href = "https://parthag.vercel.app";
    });
}

var homeText = document.getElementById("homeText");
if (homeText) {
    homeText.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='section1']");
        if (anchor) {
            anchor.scrollIntoView({
                block: "start",
                behavior: "smooth",
            });
        }
    });
}

var aboutMe = document.getElementById("aboutMe");
if (aboutMe) {
    aboutMe.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='section2']");
        if (anchor) {
            anchor.scrollIntoView({
                block: "start",
                behavior: "smooth",
            });
        }
    });
}

var myWorks = document.getElementById("myWorks");
if (myWorks) {
    myWorks.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='section3']");
        if (anchor) {
            anchor.scrollIntoView({
                block: "start",
                behavior: "smooth",
            });
        }
    });
}

var contactContainer = document.getElementById("contactContainer");
if (contactContainer) {
    contactContainer.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='section5']");
        if (anchor) {
            anchor.scrollIntoView({
                block: "start",
                behavior: "smooth",
            });
        }
    });
}

var section1CTABtn = document.getElementById("section1CTABtn");
if (section1CTABtn) {
    section1CTABtn.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='page3Projects']");
        if (anchor) {
            anchor.scrollIntoView({
                block: "start",
                behavior: "smooth",
            });
        }
    });
}

var section2CTABtn = document.getElementById("section2CTABtn");
if (section2CTABtn) {
    section2CTABtn.addEventListener("click", function () {
        window.open(
            "https://wa.me/917666400397?text=Hey%20Parth%2C%0AI%20saw%20your%20Portfolio%20website."
        );
    });
}

var section3CTABtn = document.getElementById("section3CTABtn");
if (section3CTABtn) {
    section3CTABtn.addEventListener("click", function () {
        window.open(
            "https://drive.google.com/file/d/1ZRkGTf6jMbaU40ZjWc25kDwtdBbBvz6U/view?usp=sharing"
        );
    });
}

var projectViewBtn = document.getElementById("projectViewBtn");
if (projectViewBtn) {
    projectViewBtn.addEventListener("click", function () {
        window.open(
            "https://brandifi.vercel.app/"
        );
    });
}

var projectViewBtn1 = document.getElementById("projectViewBtn1");
if (projectViewBtn1) {
    projectViewBtn1.addEventListener("click", function () {
        window.open(
            "https://www.figma.com/file/c0OkdK2zWeVKz4ZT7IQV0t/Free-Portfolio-Website-Landing-Page-(Community)-(Copy)?type=design&node-id=414%3A2&mode=design&t=PW5TL2VO0YAPnIeg-1"
        );
    });
}

var projectViewBtn2 = document.getElementById("projectViewBtn2");
if (projectViewBtn2) {
    projectViewBtn2.addEventListener("click", function () {
        window.open(
            "https://www.figma.com/file/rhGk3HMJR0ylkHMCgiXJub/Paryatan?type=design&node-id=63%3A1448&mode=design&t=vJbM4I7C0VZUUN2d-1"
        );
    });
}

var projectViewBtn3 = document.getElementById("projectViewBtn3");
if (projectViewBtn3) {
    projectViewBtn3.addEventListener("click", function () {
        window.open(
            "https://www.figma.com/file/SyYtHNNsYZ4kvtVpLLytnY/AIR-MAX-Project?type=design&node-id=4%3A33&mode=design&t=qbf1nz8zWvDEVy8n-1"
        );
    });
}

var emailMe = document.getElementById("emailMe");
if (emailMe) {
    emailMe.addEventListener("click", function () {
        window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=parthagrawal2183@gmail.com&su=Reaching%20out%20via%20website.&body=Hey%20Parth,%20I%20saw%20your%20website%20&%20wanted%20to%20contact."
        );
    });
}

var section5Phone = document.getElementById("section5Phone");
if (section5Phone) {
    section5Phone.addEventListener("click", function () {
        window.location.href = "tel:7666400397";
    });
}

var linkedinIcon = document.getElementById("linkedinIcon");
if (linkedinIcon) {
    linkedinIcon.addEventListener("click", function () {
        window.open("https://www.linkedin.com/in/parth-ag/");
    });
}

var whatsappIcon1 = document.getElementById("whatsappIcon1");
if (whatsappIcon1) {
    whatsappIcon1.addEventListener("click", function () {
        window.location.href =
            "https://wa.me/917666400397?text=Hey%20Parth%2C%0AI%20saw%20your%20website.";
    });
}

var twitterIcon = document.getElementById("twitterIcon");
if (twitterIcon) {
    twitterIcon.addEventListener("click", function () {
        window.open("https://twitter.com/ParthAgrawal_1");
    });
}

var behanceIcon = document.getElementById("behanceIcon");
if (behanceIcon) {
    behanceIcon.addEventListener("click", function () {
        window.open("https://www.behance.net/parthagrawal10");
    });
}

var dribbbleIcon = document.getElementById("dribbbleIcon");
if (dribbbleIcon) {
    dribbbleIcon.addEventListener("click", function () {
        window.open("https://dribbble.com/parity660");
    });
}

var instagramIcon = document.getElementById("instagramIcon");
if (instagramIcon) {
    instagramIcon.addEventListener("click", function () {
        window.open("https://www.instagram.com/parthag660/");
    });
}
