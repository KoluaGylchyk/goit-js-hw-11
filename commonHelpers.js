import{i as y,S as p,a as d}from"./assets/vendor-bad0427b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function l(i){y.show({close:!1,closeOnClick:!0,message:i,messageColor:"white",timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",backgroundColor:"red",progressBar:!1})}let v=new p("#gallery a",{overlayOpacity:.5,showCounter:!1});const b="41474300-2fa05bee877be877b8dc1781f",u="https://pixabay.com/api/";d.defaults.baseURL=u;const L=document.querySelector("#form"),w=document.querySelector("#searchInput"),m=document.querySelector("#gallery"),c=document.querySelector(".loader");let n;L.addEventListener("submit",S);async function S(i){if(i.preventDefault(),n=w.value.trim(),c.classList.add("hide"),!n)return l("Please enter your search query!");O(),await I()}async function I(){try{const s=(await d.get(u,{params:P()})).data;if(s.hits.length===0)return l("Sorry, no images match your search query. Please try again!");q(s.hits)}catch{A()}finally{c.classList.add("hide")}}function q(i){const s=i.reduce((a,{webformatURL:o,largeImageURL:e,tags:t,likes:r,views:f,comments:g,downloads:h})=>a+`
        <li class="gallery-item">
        <a href="${e}">
        <img src="${o}" alt="${t}" />
        </a>
        <div class="image-desc">
        <div class="image-desc-item">
        <div class="image-desc-label">Likes</div>
        <div>${r}</div>
        </div>
        <div class="image-desc-item">
        <div class="image-desc-label">Views</div>
        <div>${f}</div>
        </div>
        <div class="image-desc-item">
        <div class="image-desc-label">Comments</div>
        <div>${g}</div>
        </div>
        <div class="image-desc-item">
        <div class="image-desc-label">Downloads</div>
        <div>${h}</div>
        </div>
        </div>
        </li>
        `,"");m.insertAdjacentHTML("beforeend",s),v.refresh()}function O(){c.classList.remove("hide"),m.innerHTML=""}function P(){return{key:b,q:n,orientation:"horizontal",image_type:"photo",safesearch:!0}}function A(){l("Oops... Something went wrong")}
//# sourceMappingURL=commonHelpers.js.map
