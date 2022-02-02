import axios from 'axios'

const login = (username, password) => {
    let request = {
        url: `${import.meta.env.VITE_API_URL}/users/login`,
        body: {
          username: username,
          password: password
        }
    };
    return axios.post(request.url, request.body)
        .then((res) => {
            if (res.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(res.data.accessToken));
                return res.data;
            }else{
                return res
            }
        });
}

const logout = () => {
    localStorage.removeItem('user');
}

export const userService = {
    login,
    logout,
};