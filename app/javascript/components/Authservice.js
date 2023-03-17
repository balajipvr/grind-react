import jwt_decode from 'jsonwebtoken';

class AuthService {
  async login(email, password) {
    const response = await fetch('/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data.code)
    if (data.code == "Success") {
      localStorage.setItem('token', data.token);
      return "Success";
    }
    else {
      return "Invalid";
    }
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    const decoded = jwt_decode(token);
    return decoded.exp < Date.now() / 1000;
  }
}

export default new AuthService();