// import decode from 'jw'
export default class AuthService {
  
  static setLocalCredential(id, email, userName, token) {
    localStorage.setItem('id', id);
    localStorage.setItem('email', email);
    localStorage.setItem('userName', userName);
    localStorage.setItem('token', token);
  }

  static getLocalCredential() {
    return {
      id: localStorage.getItem('id'),
      email: localStorage.getItem('email'),
      userName: localStorage.getItem('userName'),
      token: localStorage.getItem('token')
    };
  }

  static getToken() {
    this.clearLocalCredential();
    return localStorage.getItem('token');
  }

  static clearLocalCredential() {
    const emptyString = '';
    localStorage.setItem('id', emptyString);
    localStorage.setItem('email', emptyString);
    localStorage.setItem('userName', emptyString);
    localStorage.setItem('token', emptyString);
  }

}