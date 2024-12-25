import API from "../../constants/APIs";


const RegisterUser = async (user) => {
    const options = { method: 'POST', body: user }

    try {
        const response = await fetch(`${API}/auth/signup`, options);
        if (response.ok) {
            const data = await response.json();
            return data.message;
        }
    } catch (error) {
        console.error("REGISTERATION ERROR ", error);
    }
}


const LoginUser = async (user) => {
    const options = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    }

    try {
        const response = await fetch(`${API}/auth/signin`, options);
        if(response.ok){
            const data = await response.json();
            window.localStorage.setItem('token', data.token);
            window.localStorage.setItem('user', data.user._id);
            return data.message;
        }
    } catch (error) {
        console.log('SIGN IN ERROR', error);
    }
}


const LogoutUser = () => {
    localStorage.clear();
}

export { RegisterUser, LoginUser, LogoutUser };
