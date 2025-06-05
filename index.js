(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const o={moviesList:document.querySelector("#list-movies"),loader:document.querySelector(".loader"),form:document.querySelector(".search-form"),resetBtn:document.querySelector("#reset-btn"),title:document.querySelector("#main-title")},l="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDU5NjBkZmE3YmY3ODdkYTU5NzdjMzA4NzkyNjcxOCIsIm5iZiI6MTYwMzQ4NTg3NC4wNDgsInN1YiI6IjVmOTM0MGIyN2ViNWYyMDA1YTAwY2ZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-35wsiUmFgUrlSH8Ef-TWv01vcbpp5ysK7oX-BURKOM",f=async e=>{try{return(await fetch(`https://api.themoviedb.org/3/trending/all/week?page=${e}`,{method:"GET",headers:{Authorization:`Bearer ${l}`,Accept:"application/json","Content-Type":"application/json;charset=utf-8"}})).json()}catch{return!1}},h=async(e="",r)=>{try{return(await fetch(`https://api.themoviedb.org/3/search/movie?query=${e}&page=${r}`,{method:"GET",headers:{Authorization:`Bearer ${l}`,Accept:"application/json","Content-Type":"application/json;charset=utf-8"}})).json()}catch{return!1}},u=e=>e!=null&&e.length?e.map(({poster_path:r,original_title:i,original_name:n,release_date:t,overview:s})=>`
        <li class="movie-item">
            <img
                class="movie-poster"
                src="https://image.tmdb.org/t/p/w300/${r}"
                alt="${i||n}"
                loading="lazy"
            />
            <div class="movie-info">
                <div>
                    <h3 class="movie-title">${i||n}</h3>
                    <div class="movie-year">${t||"-"}</div>
                </div>
                <p class="movie-overview">
                   ${s}
                </p>
            </div>
        </li>
        `).join(""):!1,c=e=>{o.loader.classList[e?"add":"remove"]("active")},d=e=>{o.resetBtn.classList[e?"add":"remove"]("active")},p={type:"trending",current_page:1};async function m(){o.moviesList.innerHTML="",c(!0);const e=await f(p.current_page),r=u((e==null?void 0:e.results)||[]);c(!1),o.moviesList.insertAdjacentHTML("beforeend",r),d(!1),o.title.textContent="Найпопулярніші фільми за тиждень"}o.form.addEventListener("submit",async e=>{e.preventDefault();const r=e.target.movie.value.trim();if(r){o.moviesList.innerHTML="",c(!0);const i=await h(r,p.current_page),n=u((i==null?void 0:i.results)||[]);c(!1),o.moviesList.insertAdjacentHTML("beforeend",n),d(!0),o.form.reset(),o.title.textContent=`Результат пошуку за назвою: ${r}`}});o.resetBtn.addEventListener("click",m);m();
//# sourceMappingURL=index.js.map
