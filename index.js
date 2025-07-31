import{a as w,S,i as l}from"./assets/vendor-DgsA5abv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const q="51467271-51a2ae32f63b997113462ef20",v="https://pixabay.com/api/";async function P(r,e=1){const i={key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15};return(await w.get(v,{params:i})).data}const d=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=document.querySelector(".load-more-btn"),B=new S(".gallery a",{captionsData:"alt",captionDelay:250});function M(r){const e=r.map(({webformatURL:i,largeImageURL:s,tags:t,likes:o,views:n,comments:L,downloads:b})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${i}"
            alt="${t}"
            width="360"
          />
        </a>
        <ul class="gallery-item-info">
          <li class="info-block"><h5>Likes</h5><p>${o}</p></li>
          <li class="info-block"><h5>Views</h5><p>${n}</p></li>
          <li class="info-block"><h5>Comments</h5><p>${L}</p></li>
          <li class="info-block"><h5>Downloads</h5><p>${b}</p></li>
        </ul>
      </li>`).join("");d.insertAdjacentHTML("beforeend",e),B.refresh()}function $(){d.innerHTML=""}function m(){f.classList.remove("is-hidden")}function x(){f.classList.add("is-hidden")}function E(){h.classList.remove("is-hidden")}function p(){h.classList.add("is-hidden")}const u=document.querySelector(".form"),O=u.elements["search-text"],R=document.querySelector(".load-more-btn");let a=1,g="",c=0;const H=15;u.addEventListener("submit",async r=>{r.preventDefault();const e=O.value.trim();if(!e){l.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}g=e,a=1,$(),p(),m(),await y(e,a)});R.addEventListener("click",async()=>{a+=1,m(),p(),await y(g,a)});async function y(r,e){try{const i=await P(r,e);if(c=i.totalHits,!i.hits.length){l.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}M(i.hits),e>1&&I();const s=Math.ceil(c/H);a<s?E():c>0&&l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{l.error({title:"Error",message:"Ups.. Something went wrong",position:"topRight"})}finally{x(),e===1&&u.reset()}}function I(){const r=document.querySelector(".gallery-item");if(r){const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
