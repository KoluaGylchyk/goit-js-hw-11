import{i as h,S as g}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();function n(e){h.show({close:!1,closeOnClick:!0,message:e,messageColor:"white",timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",backgroundColor:"red",progressBar:!1})}let v=new g("#gallery a",{overlayOpacity:.5,showCounter:!1});const y="41474300-2fa05bee877be877b8dc1781f",p={key:y,orientation:"horizontal",image_type:"photo",safesearch:!0},b="https://pixabay.com/api/?";let l;const L=document.querySelector("#form"),S=document.querySelector("#searchInput"),c=document.querySelector("#gallery"),d=document.querySelector(".loader");L.addEventListener("submit",w);async function w(e){if(e.preventDefault(),l=S.value.trim(),!l)return n("Please enter your search query!");P(),A()}function A(){fetch(b+new URLSearchParams({...p,q:l})).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0)return n("Sorry, no images match your search query. Please try again!");I(e.hits)}).catch(e=>{q(e)}).finally(()=>{d.classList.add("hide")})}function I(e){const s=e.reduce((a,{webformatURL:r,largeImageURL:t,tags:i,likes:o,views:u,comments:m,downloads:f})=>a+`
        <li class="gallery-item">
        <a href="${t}">
        <img src="${r}" alt="${i}" />
        </a>
        <div class="image-desc">
        <div class="image-desc-item">
        <div class="image-desc-label">Likes</div>
        <div>${o}</div>
        </div>
        <div class="image-desc-item">
        <div class="image-desc-label">Views</div>
        <div>${u}</div>
        </div>
        <div class="image-desc-item">
        <div class="image-desc-label">Comments</div>
        <div>${m}</div>
        </div>
        <div class="image-desc-item">
        <div class="image-desc-label">Downloads</div>
        <div>${f}</div>
        </div>
        </div>
        </li>
        `,"");c.insertAdjacentHTML("beforeend",s),v.refresh()}function P(){d.classList.remove("hide"),c.innerHTML=""}function q(e){var s;console.log(e),(s=e==null?void 0:e.response)!=null&&s.data?n(e.response.data):n("Oops... Something went wrong")}
//# sourceMappingURL=commonHelpers.js.map
