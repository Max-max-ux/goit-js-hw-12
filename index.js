import{a as P,S as M,i as n}from"./assets/vendor-DgsA5abv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const B="51467271-51a2ae32f63b997113462ef20",R="https://pixabay.com/api/";async function h(s,t=1){const r={key:B,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await P.get(R,{params:r})).data}const f=document.querySelector(".gallery"),p=document.querySelector(".loader"),g=document.querySelector(".load-more-btn"),$=new M(".gallery a",{captionsData:"alt",captionDelay:250});function m(s){const t=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:o,views:l,comments:q,downloads:v})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${e}"
            width="360"
          />
        </a>
        <ul class="gallery-item-info">
          <li class="info-block"><h5>Likes</h5><p>${o}</p></li>
          <li class="info-block"><h5>Views</h5><p>${l}</p></li>
          <li class="info-block"><h5>Comments</h5><p>${q}</p></li>
          <li class="info-block"><h5>Downloads</h5><p>${v}</p></li>
        </ul>
      </li>`).join("");f.insertAdjacentHTML("beforeend",t),$.refresh()}function x(){f.innerHTML=""}function y(){p.classList.remove("is-hidden")}function L(){p.classList.add("is-hidden")}function b(){g.classList.remove("is-hidden")}function w(){g.classList.add("is-hidden")}const u=document.querySelector(".form"),E=u.elements["search-text"],O=document.querySelector(".load-more-btn");let a=1,d="",c=0;const S=15;u.addEventListener("submit",async s=>{s.preventDefault();const t=E.value.trim();if(!t){n.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}d=t,a=1,x(),w(),y();try{const r=await h(d,a);if(c=r.totalHits,!r.hits.length){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(r.hits);const i=Math.ceil(c/S);a<i?b():c>0&&n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{n.error({title:"Error",message:"Ups.. Something went wrong",position:"topRight"})}finally{L(),u.reset()}});O.addEventListener("click",async()=>{a+=1,y(),w();try{const s=await h(d,a);m(s.hits);const t=document.querySelector(".gallery-item");if(t){const i=t.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}const r=Math.ceil(c/S);a<r?b():n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{n.error({title:"Error",message:"Ups.. Something went wrong",position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
