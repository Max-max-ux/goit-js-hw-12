/* empty css                      */import{a as v,S as P,i}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const $="51467271-51a2ae32f63b997113462ef20",B="https://pixabay.com/api/";async function f(s,o=1){const t={key:$,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return(await v.get(B,{params:t})).data}const g=document.querySelector(".gallery"),m=document.querySelector(".load-more-btn"),p=document.querySelector(".loader"),M=new P(".gallery a");function y(s){const o=s.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:l,comments:S,downloads:q})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${t}"
            alt="${e}"
            width="360"
          />
        </a>
        <ul class="gallery-item-info">
          <li class="info-block"><h5>Likes</h5><p>${r}</p></li>
          <li class="info-block"><h5>Views</h5><p>${l}</p></li>
          <li class="info-block"><h5>Comments</h5><p>${S}</p></li>
          <li class="info-block"><h5>Downloads</h5><p>${q}</p></li>
        </ul>
      </li>`).join("");g.insertAdjacentHTML("beforeend",o),M.refresh()}function R(){g.innerHTML=""}function L(){p.classList.remove("is-hidden")}function b(){p.classList.add("is-hidden")}function w(){m.classList.remove("is-hidden")}function c(){m.classList.add("is-hidden")}const u=document.querySelector(".form"),E=u.elements["search-text"],O=document.querySelector(".load-more-btn");let n=1,d="",h=0;const x=15;u.addEventListener("submit",async s=>{s.preventDefault();const o=E.value.trim();if(!o){i.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}d=o,n=1,R(),c(),L();try{const t=await f(d,n);if(!t.hits.length){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h=Math.ceil(t.totalHits/x),y(t.hits),n<h?w():t.hits.length>0&&i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(t){i.error({title:"Error",message:`Ups.. Something went wrong: ${t.message}`,position:"topRight"})}finally{b(),u.reset()}});O.addEventListener("click",async()=>{n+=1,c(),L();try{const s=await f(d,n);y(s.hits);const o=document.querySelector(".gallery-item");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}n<h?w():(c(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(s){i.error({title:"Error",message:`Ups.. Something went wrong: ${s.message}`,position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
