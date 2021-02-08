class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._endPoint = options.endPoint;
  }

  register(obj) {
    return fetch(this._baseUrl + this._endPoint.signup, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        "email": obj.email,
        "password": obj.password,
        "name": obj.name,
      })
    })
    .then((res) => { return res.json(); })
    .then((data) => { return data })
  }

  login(obj) {
    return fetch(this._baseUrl + this._endPoint.signin, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        "email": obj.email,
        "password": obj.password,
      })
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      localStorage.setItem('jwt', data.token);
      return data;
    })
  }

  userInfo(jwt) {
    return fetch(this._baseUrl + this._endPoint.user, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${jwt}`
      }
    })
    .then((res) => { return res.json(); })
    .then((data) => { return data })
  }

  getArticles() {
    return fetch(this._baseUrl + "/articles", {
      method: "GET",
      headers: {
        'authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Accept': 'application/json',
        "Content-Type": "application/json",
      }
    }).then((res) => { return res.json(); })
  }

  saveArticle(article) {
    return fetch(this._baseUrl + "/articles", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        Accept: 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    }).then((res) => { return res.json(); })
  }

  deleteArticle(articleId) {
    return fetch(this._baseUrl + "/articles/" + articleId, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        Accept: 'application/json',
        "Content-Type": "application/json",
      }
    }).then((res) => { return res.json(); })
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.news-finder.students.nomoredomains.rocks",
  endPoint: {
    default: '/',
    user: '/users/me',
    signup: '/signup',
    signin: '/signin',
  }
});

export default mainApi;
