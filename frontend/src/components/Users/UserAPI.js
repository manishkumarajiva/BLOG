import API from "../../constants/APIs";

const GetUser = async (userId) => {
    const options = {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
    }

    try {
        const response = await fetch(`${API}/user?userId=${userId}`, options);
        if(response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log('GET USER ERROR', error);
    }
}


export { GetUser }