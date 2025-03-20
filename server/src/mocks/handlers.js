import { http, HttpResponse } from "msw";
import allTrendingMockdata from "./mocksdata/trending/allTrending.mockdata.js";

export const handlers = [
  http.get("https://api.themoviedb.org/3/trending/all/week", () => {
    return HttpResponse.json(allTrendingMockdata);
    // return HttpResponse.text("Failed to fetch data", { status: 404 });
  }),
];
