(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const o={form:document.querySelector("#search-form"),moviesList:document.querySelector("#list-movies"),loader:document.querySelector(".loader"),title:document.querySelector("#main-title"),resetBtn:document.querySelector("#reset-btn")},a=e=>e!=null&&e.length?e.map(({poster_path:t,title:s,release_date:n,overview:r})=>`
        <li class="movie-item">
            <img
                class="movie-poster"
                src="https://image.tmdb.org/t/p/w300/${t}"
                alt="${s}"
                loading="lazy"
            />
            <div class="movie-info">
                <div>
                    <h3 class="movie-title">${s}</h3>
                    <div class="movie-year">${n||"-"}</div>
                </div>
                <p class="movie-overview">
                    ${r}
                </p>
            </div>
        </li>
        `).join(""):!1,u=()=>{o.moviesList.innerHTML=""},c=(e=!1)=>{o.loader.classList[e?"add":"remove"]("active")},p=(e=!1)=>{o.resetBtn.classList[e?"add":"remove"]("active")},f="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDU5NjBkZmE3YmY3ODdkYTU5NzdjMzA4NzkyNjcxOCIsIm5iZiI6MTYwMzQ4NTg3NC4wNDgsInN1YiI6IjVmOTM0MGIyN2ViNWYyMDA1YTAwY2ZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-35wsiUmFgUrlSH8Ef-TWv01vcbpp5ysK7oX-BURKOM",d=async()=>{try{const e={method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${f}`,"Content-Type":"application/json;charset=utf-8"}};return(await fetch("https://api.themoviedb.org/3/trending/movie/week",e)).json()}catch{return alert("Помилка сервера"),!1}},h=async(e="")=>{if(!e)return!1;try{const t={method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${f}`,"Content-Type":"application/json;charset=utf-8"}};return(await fetch(`https://api.themoviedb.org/3/search/movie?query=${e}`,t)).json()}catch{return alert("Помилка сервера"),!1}},v=(e,t="")=>{var s;if(((s=e==null?void 0:e.results)==null?void 0:s.length)>0){const n=a(e==null?void 0:e.results);c(!1),o.moviesList.insertAdjacentHTML("beforeend",n),o.title.innerHTML=`Результат пошук за запитом: ${t}`}else c(!1),o.title.innerHTML="Немає результату за Вашим запитом :(";o.form.reset(),p(!0)},y=e=>{var t;if(((t=e==null?void 0:e.results)==null?void 0:t.length)>0){const s=a(e==null?void 0:e.results);c(!1),o.moviesList.insertAdjacentHTML("beforeend",s),o.title.innerHTML="Найпопулярніші фільми за тиждень"}else c(!1),o.title.innerHTML="Поки що найпопулярніші фільми не доступні"};async function m(){u(),c(!0);const e=await d();y(e)}o.form.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.movie.value.trim();if(t&&t!==""){u(),c(!0);const s=await h(t);v(s,t)}else alert("Введіть значення!")});o.resetBtn.addEventListener("click",m);m();
//# sourceMappingURL=index.js.map
