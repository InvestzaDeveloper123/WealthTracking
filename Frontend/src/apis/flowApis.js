import axios from 'axios';

const API = "http://localhost:8082/api";

export const sendMessage = (name, email, subject, message) => axios.post(`${API}/contact/receive`, {name, email, subject, message});

// export const ReviewMyportfolio = (name, mobileNo) => axios.post(`${API}/`)