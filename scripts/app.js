const select = document.querySelectorAll(".header__lang-link");
const rus = document.querySelector(".ru");
const eng = document.querySelector(".en");
const allLang = ["ru", "en"];

select.forEach((item) => {
  item.addEventListener("click", (evt) => {
    changeURLLanguage(evt);
  });
});

function changeURLLanguage(evt) {
  let lang = evt.target.getAttribute("lang");

  location.href = window.location.pathname + "#" + lang;

  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;

  hash = hash.substr(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#ru";
    location.reload();
  }

  document.querySelector("title").innerHTML = langArr["unit"][hash];

  for (let key in langArr) {
    let elem = document.querySelector("." + key);

    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

function styleLang() {
  if (window.location.hash === "#en") {
    eng.classList.add("header__lang-link_active");
  } else {
    rus.classList.add("header__lang-link_active");
  }
}

changeLanguage();
styleLang();
