const select = document.querySelectorAll(".header__lang-link");

const allLang = ["ru", "en"];

select.forEach((item) => {
  item.addEventListener("click", (evt) => {
    changeURLLanguage(evt);
    item.classList.add("header__lang-link_active");
  });
});

// перенаправить на url с указанием языка
function changeURLLanguage(evt) {
  let lang = evt.target.getAttribute("lang");
  console.log(lang);

  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage(evt) {
  let hash = window.location.hash;

  hash = hash.substr(1);

  console.log(hash);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#ru";
    location.reload();
  }
console.log(select.value)
  // select.value = hash;
  document.querySelector("title").innerHTML = langArr["unit"][hash];
  // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
  for (let key in langArr) {
    console.log(key)
    let elem = document.querySelector('.'+ key);

    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage();
