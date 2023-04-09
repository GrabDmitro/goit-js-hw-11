import axios from 'axios';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchArticles() {
    const KEY = '?key=35239051-8aef9f2e60a2e2eef285f7d4d';
    const BASE_URL = 'https://pixabay.com/api/';
    const url =
      BASE_URL +
      KEY +
      '&q=' +
      this.searchQuery +
      '&image_type=photo' +
      '&per_page=40&page=' +
      this.page;
    return axios
      .get(url)
      .then(function (response) {
        // handle success
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  incrementPage() {
    this.page += 1;
    console.log(this.page);
  }
  resetPAge() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
    //console.log('set: ' + this.searchQuery);
  }
}
//export default function
