(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();function d(){const t=document.querySelector("main");t.innerHTML="";const e=document.createElement("div");e.id="card-info",e.innerHTML=`
  <h1>Wild Desserts</h1>
  <h2>Schedule:</h2>
  <ul>
    <li>Mon - Fri | 8:00AM - 4:00PM</li>
    <li>Sat | 9:00AM - 2:00PM</li>
  </ul>
  <p>Saturdays -10% discount!</p>
    `,t.appendChild(e)}function u(){const t=document.querySelector("main");t.innerHTML="";const e=document.createElement("div");e.id="about-card",e.innerHTML=`
    <h1>About us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
Commodi repellat id dolores culpa consectetur officia impedit, distinctio nulla
sint dicta quaerat voluptas soluta ipsa debitis dolorem aperiam velit! Vero, repellat.
Amet perspiciatis minus perferendis incidunt ex omnis nihil eum saepe, recusandae officiis
esse nesciunt ipsa illum excepturi ab temporibus iusto tenetur id</p>
    `,t.appendChild(e)}const a=["Lorem ipsum","Ipsum Lorem","LoremLorem","IpsumIpsum","LoremIpsum"],l=[9.99,3.99,6.99,2.99,4.99],m=["Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus similique quasi unde.","Lorem ipsum dolor sit amet consectetur adipisicing elit.","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis eos","Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quas fugit.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, facere!"],p=new URL("/assets/product-B8rRiSRz.webp",import.meta.url).href;function f(){const t=document.querySelector("main");t.innerHTML="";for(let e=0;e<a.length;e++){const s=document.createElement("div");s.innerHTML=`
      <div class="offer">
    <img src="${p}" alt="delicious dessert">
    <div class="info-container">
      <div class="offer-head">
        <h3>${a[e]}</h3>
        <p>$ ${l[e]}</p>
      </div>
      <p>${m[e]}</p>
    </div>
  </div>
    `,t.appendChild(s)}}const n=document.querySelector("nav");d();n==null||n.addEventListener("click",t=>{var s;switch((s=t.target)==null?void 0:s.id){case"home-section":d();break;case"menu-section":f();break;case"about-section":u();break}});
