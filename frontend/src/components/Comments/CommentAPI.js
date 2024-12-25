import API from "../../constants/APIs";


const CreateComment = async (comment) => {
    const options = {
        method : 'POST',
        headers : { "Content-Type" : "application/json" },
        body : JSON.stringify(comment)
    }

    try {
        const response = await fetch(`${API}/comment/`, options);
        if(response.ok){
            const data = await response.json();
            return data.message;
        }
    } catch (error) {
        console.error('CREATE COMMENT', error);
    }
}


const FetchComment = async (postid) => {
    const options = {
        method : 'GET',
        headers : { "Content-Type" : "application/json" }
    }

    try {
        const response = await fetch(`${API}/comment?postId=${postid}`, options);
        if(response.ok){
            const comments = await response.json();
            return comments;
        }
    } catch (error) {
        console.log("FETCH COMMENT", error);
    }
}

export { CreateComment, FetchComment };