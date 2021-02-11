import {newsApiConfig} from '../utils/NewsApiConfig';

class NewsApi {
  constructor(options) {
    this._baseUrl = options.BASE_URL;
    this._from = options.FROM;
    this._to = options.TO;
    this._language = options.LANGUAGE;
    this._pageSize = options.PAGE_SIZE;
    this._sortBy = options.SORT_BY;
    this._apiKey = options.API_KEY;
  }

  _handleOriginalResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error : ${res.status}`);
  }

  getNews(keyword) {
    return fetch(this._baseUrl + "q=" + keyword + "&from=" + this._from + "&to=" + this._to + "&language=" + this._language + "&sortBy=" + this._sortBy + "&pageSize=" + this._pageSize + "&apiKey=" + this._apiKey, {
      method: "GET",
    }).then((res) => res.json());
  }
}

const newsApi = new NewsApi(newsApiConfig);

export default newsApi;
