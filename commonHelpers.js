import{S as f,i as m}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0});function l(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(s){if(s.ep)return;s.ep=!0;const e=l(s);fetch(s.href,e)}})();const i=document.querySelector(".gallery");var p=new f(".gallery a",{captionsData:"alt",captionDelay:250});const d=document.querySelector(".form"),c=document.querySelector(".loader");function g(n){n.preventDefault();const r=d.elements.searchBar.value;if(!r){alert`Please enter something to search for!`;return}i.innerHTML="",c.classList.remove("hidden");const l=new URLSearchParams({key:"42800487-0338ab50e10ef15f71fc3313e",q:`${r.trim()}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});console.log(l.toString());const o=`https://pixabay.com/api/?${l}`;console.log(o),fetch(o,{method:"GET"}).then(e=>{if(!e.ok)throw new Error(e.status);return console.log(e),e.json()}).then(e=>{const t=e.hits;if(t.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}const u=t.map(a=>`<li class="gallery-item">
    <a class="gallery-link" href="${a.largeImageURL}">
      <img
        class="gallery-image"
        src="${a.previewURL}"
        alt="${a.tags}"
      />
    </a>
    <div class="description">
                        <div class="field">
                        <span class="label"><b>Likes</b></span>
                        <span class="value">${a.likes}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Views</b></span>
                        <span class="value">${a.views}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Comments</b></span>
                        <span class="value">${a.comments}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Downloads</b></span>
                        <span class="value">${a.downloads}</span>
                        </div>
                    </div>
  </li>
  `).join("");i.insertAdjacentHTML("afterbegin",u),p.refresh()}).catch(e=>{console.log(e)}).finally(()=>c.classList.add("hidden"))}d.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
