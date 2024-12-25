import API from "../../constants/APIs";

const CreatePost = async (post) => {
    const options = {
        method: 'POST',
        body: post
    }

    try {
        const response = await fetch(`${API}/post/`, options);
        if (response.ok) {
            const createResponse = await response.json();
            return createResponse.message;
        }
    } catch (error) {
        console.log('CREATE POST ERROR', error);
    }
}


const GetAllPost = async () => {

    const options = {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
    }

    try {
        const response = await fetch(`${API}/post/`, options);
        if (response.ok) {
            const data = await response.json();
            return data.posts;
        }
    } catch (error) {
        console.error('GET POST ERROR ', error)
    }
}

export { CreatePost, GetAllPost }