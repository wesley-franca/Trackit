import axios from "axios";

const mainURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";


function LoginPost(body) {
    const promise = axios.post(`${mainURL}/auth/login`, body);
    return promise;
}

function RegistrationPost(body) {
    const promise = axios.post(`${mainURL}/auth/sign-up`, body);
    return promise;
}

// function PostHabit() {
//     const promise = axios.post(`${mainURL}/habits`);
//     return promise;
// }

// function GetHabit(token) {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`
//         },
//     };
//     const promise = axios.get(`${mainURL}/habits`, config);
//     return promise;
// }

export {LoginPost, RegistrationPost};