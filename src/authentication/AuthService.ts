const login = (userInfo: { username: string; password: string }) => {
    if (userInfo.username === "admin" && userInfo.password === "admin") {
      localStorage.setItem('user', JSON.stringify(userInfo));
    } else {
      return "unrecognized user";
    }
  };
  
  const logout = () => {
    localStorage.removeItem('user');
  };
  
  const checkAuth = () => {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      return user;
    } else {
      return false;
    }
  };
  
  export { login, logout, checkAuth };
  