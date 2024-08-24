import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjI1MTVjYzNjNTBjMjBlODRjMTliYjc5ZjJiODE4ZCIsIm5iZiI6MTcyMjc2NjM1MC4wNjYzMjMsInN1YiI6IjY2NThhZGQzZDlmOTE0ZjdkMDY3YzFkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.biqNrCm2DNpPNz3pJcac6QWomAlPPSsTGAJEbI4xUG4";

export const END_POINT: string = "/trending/movie/week?language=en-US";

type Rezults = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type PagesListInfo = {
  page: number;
  total_pages: number;
  total_results: number;
  results: Rezults[];
};

async function fetchData(url: string): Promise<PagesListInfo> {
  try {
    const response = await axios.get<PagesListInfo>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// const mainNodeElement: any = document.querySelector<HTMLDivElement>("#app");
// fetchData(END_POINT)
//   .then((data) => {
//     console.log(data);
//     // const listHTML = `<ul>
//     // ${data.results
//     //   .map(({ title }) => {
//     //     return `<li><h2>${title}</h2></li>`;
//     //   })
//     //   .join("")}
//     //   </ul>
//     //   `;
//     // mainNodeElement.insertAdjacentHTML("afterend", listHTML);
//   })
//   .catch((error) => console.error(`Error fetching from ${error}`));

export default fetchData;
