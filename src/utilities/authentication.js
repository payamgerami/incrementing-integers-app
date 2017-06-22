export default {

  saveLoginInfo(response) {
    localStorage.setItem('UserName', response.name);
    localStorage.setItem('Email', response.email);
    localStorage.setItem('Token', response.accessToken);
    localStorage.setItem('Picture',response.picture.data.url);
  },

  hasToken() {
    return !!localStorage.Token;
  },

  getEmail() {
    return localStorage.Email;
  },
  getPicture() {
    return localStorage.Picture;
  },
  getName() {
    return localStorage.UserName;
  },

  deleteToken() {
    localStorage.clear();
  }
}
