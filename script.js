//Hamburger Icon Control
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', function() {
    this.classList.toggle("is-active");

    const visibility = navMenu.getAttribute("data-visible");
    if (visibility === "false") {
        navMenu.setAttribute("data-visible", true);
        hamburger.setAttribute("aria-expanded", true)
    } else {
        navMenu.setAttribute("data-visible", false)
        hamburger.setAttribute("aria-expanded", false)
    }
});


//Our Projects Section
let projects = [
    {
        name: "Rainer >>Visit",
        class:"rainer",
        portfolio:"https://rainerhamal.github.io/Rainer_E_Portfolio/"
       // image: "ep.jpg",
    },
    {
        name: "Junrel >>Visit",
        class:"junrel",
        portfolio:"https://jednalig.github.io/Junrel_EPortfolio/"
       // image: "ep.jpg",
    },
    {
        name: "Janfel >>Visit",
        class:"janfel",
        portfolio:"/JanfelG-Eportfolio/index1.html"
      //  image: "ep.jpg",
    },
    {
        name: "Zeny >>Visit",
        class:"zeny",
        portfolio:"/ZenzenPortfolio/e-portfolio.html"
      //  image: "ep.jpg",
    },
   
   
]


const projectContainer = document.querySelector('.mycontainourteam');

projects.forEach(project => {
    projectContainer.innerHTML += `
    <div class="block">
    <div class="wrapper">
    <div class="lid one"></div>
    <div class="lid two"></div>
    <div class="envelope"></div>
    <div class="${project.class} letter">
      <a class="eport" href="${project.portfolio}">${project.name}</a>
    </div>
  </div>
  </block>
    `;
});


//Contact Us Validation
let contactForm = document.querySelector("#contactForm");
let nameFull = document.querySelector("#nameFull");
let email = document.querySelector("#email");
let contactNumber = document.querySelector("#contactNumber");
let message = document.querySelector("#message");
let submit = document.querySelector("#submit");

contactForm.addEventListener('input', (event2) => {
    let targetVar = event2.target.id;
    // console.log(event2.target.id);
    switch(targetVar) {
        case 'nameFull':
            checkName();
            break;
        case 'email':
            checkEmail();
            break;
        case 'contactNumber':
            checkNumber();
            break;
        case 'message':
            checkMessage();
            break;
    }
});


contactForm.addEventListener('submit', (event) => {
    checkName();
    checkEmail();
    checkNumber();
    checkMessage();
    event.preventDefault();
});

function checkName() {
    let nameValue = nameFull.value;
    //name validation
    if (nameValue === "") {
        document.querySelector("#error1").innerText = "Write your Full Name";
    } else {
        let nameFinal = nameValue.trim();
        if (nameFinal.length < 5) {
            document.querySelector("#error1").innerText = "Write your Full Name";
        } else {
            document.querySelector("#error1").innerText = `Good Day ${nameFinal}`;
        }
    }

};

function checkEmail() {
    let emailValue = email.value;

    if (emailValue === "") {
        document.querySelector("error2").innertext = "Email must be filled out!";
    } else {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailFinal = emailValue.trim();
        if ((regEmail.test(emailFinal)) && (emailFinal.indexOf(" ") === -1)) {
            document.querySelector("#error2").innerText = "Valid Email";
        } else {
            document.querySelector("#error2").innerText = "Email Address must be username@email.com and must not have any spaces!";
        }
    }
};


function checkNumber() {
    let contactNumberValue = contactNumber.value;
    let contactNumberFinal = contactNumberValue.trim();

        let phoneNum = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})?[-. ]?([0-9]{4})$/;
        if ((phoneNum.test(contactNumberFinal))){
            document.querySelector("#error3").innerText = "Valid Number";
        } else {
            document.querySelector("#error3").innerText = "Phone number must be in the following format +XX-XXX-XXX-XXXX, +XX.XXX.XXX.XXXX, +XX XXX XXX XXXX";
        }
};

function checkMessage() {
    let messageValue = message.value
    let messageFinal = messageValue.trim();
        if (messageFinal.length < 50) {
            document.querySelector("#error4").innerText = "Please compose a detailed message!";
        } else {
            document.querySelector("#error4").innerText = "Thank you for your Inquiry!";
        }
}

let contactInquiryArray = [];
let addInquiry = document.querySelector("#submit");

let addContactInquiry = (e) => {
    let contactInquiry ={
        id: Date.now(),
        name: document.querySelector("#nameFull").value,
        email: document.querySelector("#email").value,
        number: document.querySelector("#contactNumber").value,
        message: document.querySelector("#message").value,
    }

    contactInquiryArray.push(contactInquiry);
    document.querySelector("#contactForm").reset();
    console.table(contactInquiryArray);

    localStorage.setItem("Contact Inquiries", JSON.stringify(contactInquiryArray));

    e.preventDefault();
}

addInquiry.addEventListener('click', addContactInquiry);