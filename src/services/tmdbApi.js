import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/3/";
export const MOVIE_LIST_URL = `${BASE_URL}discover/movie?api_key=651925d45022d1ae658063b443c99784&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=`;
// export const MOVIE_DETAILS_URL = "";

export const getMovie = movieId => {

}

export const getMoviesList = (pageId) => {
    return axios.get(MOVIE_LIST_URL + pageId).then(response => {
        
        const data = response.status === 200 && response.data;
        console.log(">> result is (api): ", data);
        return data;
    });
}