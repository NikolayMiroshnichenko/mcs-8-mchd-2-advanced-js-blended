export const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDU5NjBkZmE3YmY3ODdkYTU5NzdjMzA4NzkyNjcxOCIsIm5iZiI6MTYwMzQ4NTg3NC4wNDgsInN1YiI6IjVmOTM0MGIyN2ViNWYyMDA1YTAwY2ZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-35wsiUmFgUrlSH8Ef-TWv01vcbpp5ysK7oX-BURKOM';

export const getTrendingMovies = async (page) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?page=${page}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${AUTH_TOKEN}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            }
        });

        return response.json();
    } catch {
        return false;
    }
}