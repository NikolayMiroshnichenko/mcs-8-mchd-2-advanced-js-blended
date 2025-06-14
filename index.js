(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const o={form:document.querySelector("#search-form"),moviesList:document.querySelector("#list-movies"),loader:document.querySelector(".loader"),title:document.querySelector("#main-title"),resetBtn:document.querySelector("#reset-btn"),loadMoreBtn:document.querySelector("#load-more")},a=e=>e!=null&&e.length?e.map(({poster_path:t,title:s,release_date:i,overview:r})=>`
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
                    <div class="movie-year">${i||"-"}</div>
                </div>
                <p class="movie-overview">
                    ${r}
                </p>
            </div>
        </li>
        `).join(""):!1,u=()=>{o.moviesList.innerHTML=""},c=(e=!1)=>{o.loader.classList[e?"add":"remove"]("active")},f=(e=!1)=>{o.resetBtn.classList[e?"add":"remove"]("active")},d=(e=!1)=>{o.loadMoreBtn.classList[e?"add":"remove"]("active")},m="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDU5NjBkZmE3YmY3ODdkYTU5NzdjMzA4NzkyNjcxOCIsIm5iZiI6MTYwMzQ4NTg3NC4wNDgsInN1YiI6IjVmOTM0MGIyN2ViNWYyMDA1YTAwY2ZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-35wsiUmFgUrlSH8Ef-TWv01vcbpp5ysK7oX-BURKOM",p={currentPage:1,type:"tranding",qery:""},h=async(e=1)=>{try{const t={method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${m}`,"Content-Type":"application/json;charset=utf-8"}};return(await fetch(`https://api.themoviedb.org/3/trending/movie/week?page=${e}`,t)).json()}catch{return alert("Помилка сервера"),!1}},g=async(e="",t=1)=>{if(!e)return!1;try{const s={method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${m}`,"Content-Type":"application/json;charset=utf-8"}};return(await fetch(`https://api.themoviedb.org/3/search/movie?query=${e}&page=${t}`,s)).json()}catch{return alert("Помилка сервера"),!1}},L=(e,t="")=>{var s;if(((s=e==null?void 0:e.results)==null?void 0:s.length)>0){const i=a(e==null?void 0:e.results);c(!1),o.moviesList.insertAdjacentHTML("beforeend",i),o.title.innerHTML=`Результат пошук за запитом: ${t}`}else c(!1),o.title.innerHTML="Немає результату за Вашим запитом :(";o.form.reset(),f(!0)},v=e=>{var t;if(((t=e==null?void 0:e.results)==null?void 0:t.length)>0){const s=a(e==null?void 0:e.results);c(!1),o.moviesList.insertAdjacentHTML("beforeend",s),o.title.innerHTML="Найпопулярніші фільми за тиждень",e.page<e.total_pages&&(p.currentPage=e.page+=1,d(!0))}else c(!1),o.title.innerHTML="Поки що найпопулярніші фільми не доступні";f(!1)};async function y(){u(),c(!0);const e=await h();v(e)}o.form.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.movie.value.trim();if(t&&t!==""){u(),c(!0);const s=await g(t);L(s,t)}else alert("Введіть значення!")});o.resetBtn.addEventListener("click",y);o.loadMoreBtn.addEventListener("click",async()=>{c(!0),d(!1);{const e=await h(p.currentPage);v(e)}});y();
//# sourceMappingURL=index.js.map
