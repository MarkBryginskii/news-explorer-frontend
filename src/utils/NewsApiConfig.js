const NUMBER_OF_SHOWN_CARDS = 3;
const NUMBER_OF_DAYS = 7;

const newsApiConfig = {
  // BASE_URL: "https://newsapi.org/v2/everything?",
  BASE_URL: "https://nomoreparties.co/news/v2/everything?",
  FROM: new Date(new Date().setDate(new Date().getDate() - NUMBER_OF_DAYS)).toISOString().substring(0, 10),
  TO: new Date().toISOString().substring(0, 10),
  LANGUAGE: 'ru',
  PAGE_SIZE: '100',
  SORT_BY: 'publishedAt',
  API_KEY: 'd11e066c35154e36b19e9cdf506d0341',
}

export { newsApiConfig, NUMBER_OF_SHOWN_CARDS }
