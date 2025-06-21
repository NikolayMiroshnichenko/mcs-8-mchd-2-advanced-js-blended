(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const i={form:document.querySelector("#search-form"),moviesList:document.querySelector("#list-movies"),loader:document.querySelector(".loader"),title:document.querySelector("#main-title"),resetBtn:document.querySelector("#reset-btn"),loadMoreBtn:document.querySelector("#load-more")},a=e=>e!=null&&e.length?e.map(({poster_path:r,title:o,release_date:s,overview:t})=>`
        <li class="movie-item">
            <img
                class="movie-poster"
                src="https://image.tmdb.org/t/p/w300/${r}"
                alt="${o}"
                loading="lazy"
            />
            <div class="movie-info">
                <div>
                    <h3 class="movie-title">${o}</h3>
                    <div class="movie-year">${s||"-"}</div>
                </div>
                <p class="movie-overview">
                    ${t}
                </p>
            </div>
        </li>
        `).join(""):!1,u=()=>{i.moviesList.innerHTML=""},c=(e=!1)=>{i.loader.classList[e?"add":"remove"]("active")},d=(e=!1)=>{i.resetBtn.classList[e?"add":"remove"]("active")},f="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDU5NjBkZmE3YmY3ODdkYTU5NzdjMzA4NzkyNjcxOCIsIm5iZiI6MTYwMzQ4NTg3NC4wNDgsInN1YiI6IjVmOTM0MGIyN2ViNWYyMDA1YTAwY2ZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-35wsiUmFgUrlSH8Ef-TWv01vcbpp5ysK7oX-BURKOM",p=async(e=1)=>{try{const r={method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${f}`,"Content-Type":"application/json;charset=utf-8"}};return(await fetch(`https://api.themoviedb.org/3/trending/movie/week?page=${e}`,r)).json()}catch{return alert("Помилка сервера"),!1}},h=async(e="",r=1)=>{if(!e)return!1;try{const o={method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${f}`,"Content-Type":"application/json;charset=utf-8"}};return(await fetch(`https://api.themoviedb.org/3/search/movie?query=${e}&page=${r}`,o)).json()}catch{return alert("Помилка сервера"),!1}};async function m(){var r;u(),c(!0);const e=await p();if(((r=e==null?void 0:e.results)==null?void 0:r.length)>0){const o=a(e==null?void 0:e.results);c(!1),i.moviesList.insertAdjacentHTML("beforeend",o),i.title.innerHTML="Найпопулярніші фільми за тиждень"}else c(!1),i.title.innerHTML="Поки що найпопулярніші фільми не доступні";d(!1)}i.form.addEventListener("submit",async e=>{var o;e.preventDefault();const r=e.target.movie.value.trim();if(r&&r!==""){u(),c(!0);const s=await h(r);if(((o=s==null?void 0:s.results)==null?void 0:o.length)>0){const t=a(s==null?void 0:s.results);c(!1),i.moviesList.insertAdjacentHTML("beforeend",t),i.title.innerHTML=`Результат пошук за запитом: ${r}`}else c(!1),i.title.innerHTML="Немає результату за Вашим запитом :(";i.form.reset(),d(!0)}else alert("Введіть значення!")});i.resetBtn.addEventListener("click",m);m();
//# sourceMappingURL=index.js.map
