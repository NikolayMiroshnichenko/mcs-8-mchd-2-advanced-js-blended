export const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDU5NjBkZmE3YmY3ODdkYTU5NzdjMzA4NzkyNjcxOCIsIm5iZiI6MTYwMzQ4NTg3NC4wNDgsInN1YiI6IjVmOTM0MGIyN2ViNWYyMDA1YTAwY2ZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-35wsiUmFgUrlSH8Ef-TWv01vcbpp5ysK7oX-BURKOM';

export const settings = {
    currentPage: 1,
    type: 'tranding',
    qery: ''
};

export const getTrendingMovies = async (page = 1) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${AUTH_TOKEN}`,
                'Content-Type': 'application/json;charset=utf-8'
            }
        };

        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?page=${page}`, options);
        return response.json();
    } catch {
        alert('Помилка сервера')
        return false;
    }
};

export const getSearchMovies = async (query = '', page = 1) => {
    if (!query) return false;

    try {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${AUTH_TOKEN}`,
                'Content-Type': 'application/json;charset=utf-8'
            }
        };

        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`, options);
        return response.json();
    } catch {
        alert('Помилка сервера')
        return false;
    }
};