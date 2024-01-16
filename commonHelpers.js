import{i as f,S as h}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(s){f.show({close:!1,closeOnClick:!0,message:s,messageColor:"white",timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",backgroundColor:"red",progressBar:!1})}let p=new h("#gallery a",{overlayOpacity:.5,showCounter:!1});const l=document.querySelector("#form"),g=document.querySelector("#searchInput"),c=document.querySelector("#gallery"),a=document.querySelector(".loader");l.addEventListener("submit",y);function y(s){a.classList.remove("hide"),c.innerHTML="",s.preventDefault();const o=new URLSearchParams({key:"41474300-2fa05bee877be877b8dc1781f",q:g.value,orientation:"horizontal",image_type:"photo",safesearch:!0});fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(a.classList.add("hide"),r.hits.length===0)return m("Sorry, there are no images matching your search query. Please try again!");v(r.hits)}).catch(r=>console.log(r)).finally(()=>{l.reset()})}function v(s){c.innerHTML=s.reduce((o,{webformatURL:r,largeImageURL:n,tags:e,likes:t,views:i,comments:u,downloads:d})=>o+`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${r}" alt="${e}" />
        </a>
        <div class="image-desc">
          <div>Likes <span>${t}</span></div>
          <div>Views <span>${i}</span></div>
          <div>Comments <span>${u}</span></div>
          <div>Downloads <span>${d}</span></div>
        </div>
      </li>
      `,""),p.refresh()}
//# sourceMappingURL=commonHelpers.js.map
