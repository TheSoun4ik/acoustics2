!function(){"use strict";var e={957:function(e,t,r){var o=r(691),c=r(342),n=r(368),a=r(822),s=r(804);document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".descr__more"),t=document.querySelector(".article__more"),r=document.querySelector(".feature__more");(0,o.Z)(),(0,a.Z)(),(0,s.Z)(),e&&(0,c.Z)(".descr__more",".descr__text"),t&&(0,c.Z)(".article__more",".article__text"),r&&(0,n.Z)(),AOS.init()}))},691:function(e,t){t.Z=()=>{const e=document.querySelector(".burger"),t=document.querySelector(".nav-mob"),r=document.querySelector(".nav-mob__close");e.addEventListener("click",(()=>{t.classList.add("active-nav-mob")})),r.addEventListener("click",(()=>{t.classList.remove("active-nav-mob")}))}},342:function(e,t){t.Z=(e,t)=>{const r=document.querySelector(e),o=document.querySelector(t);r.addEventListener("click",(()=>{o.querySelectorAll("p").forEach((e=>{e.classList.add("more-show")})),r.classList.add("more-show")}))}},368:function(e,t){t.Z=()=>{const e=document.querySelector(".feature__more"),t=document.querySelectorAll(".feature__col");e.addEventListener("click",(()=>{t.forEach((e=>{e.classList.add("more-show"),e.querySelectorAll(".feature__item").forEach((e=>{e.classList.add("more-show")}))})),e.classList.add("more-show")}))}},822:function(e,t){t.Z=()=>{const e=document.querySelector(".header"),t=document.querySelector(".modal"),r=document.querySelectorAll(".nav__link-modal");t.style.top=e.offsetHeight+"px",r.forEach((e=>{e.addEventListener("click",(r=>{r.preventDefault(),e.classList.toggle("active-modal"),t.classList.toggle("active-modal")}))}))}},804:function(e,t){t.Z=()=>{new Swiper(".gallery__inner",{navigation:{nextEl:".gallery__arrow--next",prevEl:".gallery__arrow--prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'"></span>'}}});const e=document.querySelector(".additional__wrapper"),t=document.querySelector(".additional__inner"),r=document.querySelectorAll(".additional__item");if(window.innerWidth<=415)try{e.classList.add("swiper"),t.classList.add("swiper-wrapper"),r.forEach((e=>{e.classList.add("swiper-slide")})),new Swiper(".additional__wrapper",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:14})}catch{}const o=document.querySelector(".news__wrapper"),c=document.querySelector(".news__inner"),n=document.querySelectorAll(".news__item");if(window.innerWidth<=415)try{o.classList.add("swiper"),c.classList.add("swiper-wrapper"),n.forEach((e=>{e.classList.add("swiper-slide")})),new Swiper(".news__wrapper",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:14})}catch{}}}},t={};function r(o){var c=t[o];if(void 0!==c)return c.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r(957),r(691),r(342),r(368),r(822),r(804)}();