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

function PostHabit(body, config) {
    const promise = axios.post(`${mainURL}/habits`, body, config);
    return promise;
}

function GetHabit(token) {
    const config = { headers: { Authorization: `Bearer ${token}` } }
    const promise = axios.get(`${mainURL}/habits`, config);
    return promise;
}

function DeleteHabit(token, id) {
    const config = { headers: { Authorization: `Bearer ${token}` } }
    const promise = axios.delete(`${mainURL}/habits/${id}`, config);
    return promise;
}

function GetToday(token) {
    const config = { headers: { Authorization: `Bearer ${token}` } }
    const promise = axios.get(`${mainURL}/habits/today`, config);
    return promise;
}

function PostDone(token, id) {
    const config = { headers: { Authorization: `Bearer ${token}` } }
    const body = {}
    const promise = axios.post(`${mainURL}/habits/${id}/check`, body, config);
    return promise;
}

function PostUndone(token, id) {
    const config = { headers: { Authorization: `Bearer ${token}` } }
    const body = {}
    const promise = axios.post(`${mainURL}/habits/${id}/uncheck`, body, config);
    return promise;
}

export { LoginPost, RegistrationPost, PostHabit, GetHabit, DeleteHabit, GetToday, PostDone, PostUndone };