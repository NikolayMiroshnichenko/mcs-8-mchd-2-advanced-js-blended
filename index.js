(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const r={form:document.querySelector("#search-form"),moviesList:document.querySelector("#list-movies"),loader:document.querySelector(".loader"),title:document.querySelector("#main-title"),resetBtn:document.querySelector("#reset-btn"),loadMoreBtn:document.querySelector("#load-more")},f=e=>e!=null&&e.length?e.map(({poster_path:t,title:o,release_date:i,overview:s})=>`
        <li class="movie-item">
            <img
                class="movie-poster"
                src="https://image.tmdb.org/t/p/w300/${t}"
                alt="${o}"
                loading="lazy"
            />
            <div class="movie-info">
                <div>
                    <h3 class="movie-title">${o}</h3>
                    <div class="movie-year">${i||"-"}</div>
                </div>
                <p class="movie-overview">
                    ${s}
                </p>
            </div>
        </li>
        `).join(""):!1,d=()=>{r.moviesList.innerHTML=""},c=(e=!1)=>{r.loader.classList[e?"add":"remove"]("active")},p=(e=!1)=>{r.resetBtn.classList[e?"add":"remove"]("active")},l=(e=!1)=>{r.loadMoreBtn.classList[e?"add":"remove"]("active")},m="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDU5NjBkZmE3YmY3ODdkYTU5NzdjMzA4NzkyNjcxOCIsIm5iZiI6MTYwMzQ4NTg3NC4wNDgsInN1YiI6IjVmOTM0MGIyN2ViNWYyMDA1YTAwY2ZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-35wsiUmFgUrlSH8Ef-TWv01vcbpp5ysK7oX-BURKOM",h=async(e=1)=>{try{const t={method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${m}`,"Content-Type":"application/json;charset=utf-8"}};return(await fetch(`https://api.themoviedb.org/3/trending/movie/week?page=${e}`,t)).json()}catch{return alert("Помилка сервера"),!1}},g=async(e="",t=1)=>{if(!e)return!1;try{const o={method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${m}`,"Content-Type":"application/json;charset=utf-8"}};return(await fetch(`https://api.themoviedb.org/3/search/movie?query=${e}&page=${t}`,o)).json()}catch{return alert("Помилка сервера"),!1}};let u=1;async function v(){var t;d(),c(!0);const e=await h();if(((t=e==null?void 0:e.results)==null?void 0:t.length)>0){const o=f(e==null?void 0:e.results);c(!1),r.moviesList.insertAdjacentHTML("beforeend",o),r.title.innerHTML="Найпопулярніші фільми за тиждень",e.page<e.total_pages&&(u=e.page+=1,l(!0))}else c(!1),r.title.innerHTML="Поки що найпопулярніші фільми не доступні";p(!1)}r.form.addEventListener("submit",async e=>{var o;e.preventDefault();const t=e.target.movie.value.trim();if(t&&t!==""){d(),c(!0);const i=await g(t);if(((o=i==null?void 0:i.results)==null?void 0:o.length)>0){const s=f(i==null?void 0:i.results);c(!1),r.moviesList.insertAdjacentHTML("beforeend",s),r.title.innerHTML=`Результат пошук за запитом: ${t}`}else c(!1),r.title.innerHTML="Немає результату за Вашим запитом :(";r.form.reset(),p(!0)}else alert("Введіть значення!")});r.resetBtn.addEventListener("click",v);r.loadMoreBtn.addEventListener("click",async()=>{var e;c(!0),l(!1);{const t=await h(u);if(((e=t==null?void 0:t.results)==null?void 0:e.length)>0){const o=f(t==null?void 0:t.results);c(!1),r.moviesList.insertAdjacentHTML("beforeend",o),t.page<t.total_pages&&(u=t.page+=1,l(!0))}else c(!1)}});v();
//# sourceMappingURL=index.js.map
