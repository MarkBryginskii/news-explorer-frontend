class NewsApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._from = options.from;
    this._to = options.to;
    this._language = options.language;
    this._pageSize = options.pageSize;
    this._sortBy = options.sortBy;
    this._apiKey = options.apiKey;
    this._headers = options.headers;
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

const numberOfDays = 7;

const fromDate = new Date(new Date().setDate(new Date().getDate() - numberOfDays)).toISOString().substring(0, 10);
const toDate = new Date().toISOString().substring(0, 10);

const newsApi = new NewsApi({
  // baseUrl: "https://newsapi.org/v2/everything?",
  baseUrl: "https://nomoreparties.co/news/v2/everything?",
  from: fromDate,
  to: toDate,
  language: 'ru',
  pageSize: '100',
  sortBy: 'publishedAt',
  apiKey: 'd11e066c35154e36b19e9cdf506d0341',
});

export default newsApi;
