import{i as p,S as y,a as c}from"./assets/vendor-bad0427b.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();function r(t){p.show({close:!1,closeOnClick:!0,message:t,messageColor:"white",timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",backgroundColor:"red",progressBar:!1})}let v=new y("#gallery a",{overlayOpacity:.5,showCounter:!1});const b="41474300-2fa05bee877be877b8dc1781f",d="https://pixabay.com/api/";let l;c.defaults.baseURL=d;c.defaults.params={key:b,orientation:"horizontal",image_type:"photo",safesearch:!0};const L=document.querySelector("#form"),w=document.querySelector("#searchInput"),u=document.querySelector("#gallery"),m=document.querySelector(".loader");L.addEventListener("submit",S);async function S(t){if(t.preventDefault(),l=w.value.trim(),!l)return r("Please enter your search query!");O(),await I()}async function I(){try{const i=(await c.get(d,{params:{q:l}})).data;if(i.hits.length===0)return r("Sorry, no images match your search query. Please try again!");q(i.hits)}catch(t){A(t)}finally{m.classList.add("hide")}}function q(t){const i=t.reduce((n,{webformatURL:o,largeImageURL:e,tags:s,likes:a,views:f,comments:g,downloads:h})=>n+`
        <li class="gallery-item">
        <a href="${e}">
        <img src="${o}" alt="${s}" />
        </a>
        <div class="image-desc">
        <div class="image-desc-item">
        <div class="image-desc-label">Likes</div>
        <div>${a}</div>
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
        `,"");u.insertAdjacentHTML("beforeend",i),v.refresh()}function O(){m.classList.remove("hide"),u.innerHTML=""}function A(t){var i;console.log(t),(i=t==null?void 0:t.response)!=null&&i.data?r(t.response.data):r("Oops... Something went wrong")}
//# sourceMappingURL=commonHelpers.js.map
