export default {

    saveLoginInfo(response) {
        localStorage.setItem('UserName', response.name);
        localStorage.setItem('Email', response.email);
        localStorage.setItem('Token', response.accessToken);
        localStorage.setItem('Picture', response.picture.data.url);
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
    hasToken() {
        return !!localStorage.Token;
    },
    getToken() {
        return localStorage.Token;
    },
    deleteToken() {
        localStorage.clear();
    }
}