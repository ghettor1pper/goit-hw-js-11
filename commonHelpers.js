import{S as d,i as u}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const i=document.querySelector(".gallery"),f=new d(".gallery a",{});function m(){i.innerHTML=""}function p(a){const t=a.map(s=>`<li class="gallery-item">
      <a class="gallery-link" href="${s.largeImageURL}">
        <img
          class="gallery-image"
          src="${s.previewURL}"
        />
      </a>
      <div class="description">
        <div class="field">
          <span class="label">Likes</span>
          <span class="value">${s.likes}</span>
        </div>
        <div  class="field">
          <span class="label">Views</span>
          <span class="value">${s.views}</span>
        </div>
        <div  class="field">
          <span class="label">Comments</span>
          <span class="value">${s.comments}</span>
        </div>
        <div  class="field">
          <span class="label">Downloads</span>
          <span class="value">${s.downloads}</span>
        </div>
      </div>
    </li>`).join("");i.insertAdjacentHTML("afterbegin",t),f.refresh()}async function h(a){const t=new URLSearchParams({key:"42800487-0338ab50e10ef15f71fc3313e",q:`${a.trim()}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});console.log(t.toString());const s=`https://pixabay.com/api/?${t}`;return console.log(s),await fetch(s,{method:"GET"}).then(e=>{if(!e.ok)throw new Error(e.status);return console.log(e),e.json()}).then(e=>({images:e.hits,totalImages:e.totalHits}))}const c=document.querySelector(".form"),l=document.querySelector(".loader");async function g(a){a.preventDefault();const t=c.elements.searchBar.value;if(!t){alert`Please enter something to search for!`;return}l.classList.remove("hidden");const{images:s,totalImages:o}=await h(t.trim());if(l.classList.add("hidden"),m(),s.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}p(s)}c.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
