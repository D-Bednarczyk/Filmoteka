var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in l){var i=l[e];delete l[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){l[e]=t},e.parcelRequired7c6=i),i("g1uI7"),i("eYZO9"),i("6J0jm"),i("1PLT2"),i("ebN5C");var n=i("5y5ap"),a=(i("hGVxz"),i("c8RuX")),s=i("lthku");const o={galleryBox:document.querySelector(".movies__list"),filmModal:document.querySelector("[data-modal]"),searchId:[],filmDetails:{}};function d(){o.filmModal.classList.add("is-hidden"),o.filmModal.innerHTML=""}async function c(){const e={id:o.filmDetails.id,title:o.filmDetails.title,posterPath:o.filmDetails.poster_path,releaseYear:o.filmDetails.release_date,genreNames:o.filmDetails.genres};(0,s.addToWatched)(e)}async function r(){const e={id:o.filmDetails.id,title:o.filmDetails.title,posterPath:o.filmDetails.poster_path,releaseYear:o.filmDetails.release_date,genreNames:o.filmDetails.genres};(0,s.addToQueue)(e)}o.galleryBox.addEventListener("click",(async function(e){if(e.target.classList.contains(".movies__list"))return;const t=e.target.closest("[data-id]").dataset.id;let l=null;o.searchId.length>0&&o.searchId.find((e=>e.id==t));(0,a.displayLoader)(a.loader);const i=(await(0,n.fetchFilmDetailsById)(t)).data;o.filmDetails=i,o.searchId.push(i),o.filmModal.classList.remove("is-hidden"),function(e){const t=function(e){const{title:t,vote_average:l,vote_count:i,popularity:n,original_title:a,overview:s,poster_path:o,genres:d}=e,c=o?`https://image.tmdb.org/t/p/w500${o}`:"https://www.cloudways.com/blog/wp-content/uploads/How-to-Create-Custom-Codeigniter-404-Not-Found-Page-1.jpg",r=d.map((e=>e.name)).join(" ");return`\n    <div class="film-modal">\n      <button class="button-close" type="button" button-modal-close>X</button>\n      <img class="film__image" src="${c}" alt="Film Image" />\n      <article>\n        <div class="film__content">\n          <h2 class="film__title">${t}</h2>\n          <ul class="film-info">\n            <li class="film-info__item">\n              <p class="film-info__label">Vote / Votes</p>\n              <div class="film-vote">\n                <span class="film-vote__label film-vote__label--orange">${l}</span>\n                <span>/</span>\n                <span class="film-vote__label">${i}</span>\n              </div>\n            </li>\n            <li class="film-info__item">\n              <p class="film-info__label">Popularity</p>\n              <span class="film-info__text">${n}</span>\n            </li>\n            <li class="film-info__item">\n              <p class="film-info__label">Original Title</p>\n              <span class="film-info__text film-info__text--uppercase">${a}</span>\n            </li>\n            <li class="film-info__item">\n              <p class="film-info__label">Genre</p>\n              <span class="film-info__text">${r}</span>\n            </li>\n          </ul>\n          <div class="film-description">\n            <h3 class="film-description__title">About</h3>\n            <p class="film-description__text">${s}</p>\n          </div>\n        </div>\n        <ul class="film-button">\n          <li class="film-button__item">\n            <button class="film-button__primary library__btn library__btn--onclick" type="button" button-add-watch>\n              Add to Watched\n            </button>\n          </li>\n          <li class="film-button__item">\n            <button class="film-button__primary library__btn" type="button" button-add-queue>\n              Add to Queue\n            </button>\n          </li>\n        </ul>\n      </article>\n    </div>\n  `}(e);o.filmModal.insertAdjacentHTML("beforeend",t),(0,a.displayLoader)(a.loader);document.querySelector(".button-close").addEventListener("click",d),window.addEventListener("keydown",d),window.addEventListener("click",d);document.querySelector("[button-add-watch]").addEventListener("click",c);document.querySelector("[button-add-queue]").addEventListener("click",r)}(o.filmDetails)}));
//# sourceMappingURL=index.de829fcc.js.map
