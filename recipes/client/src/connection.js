import axios from 'axios';
const server_url = 'http://localhost:3000';

export function getrecipes() {
    return axios.get(`${server_url}/recipes`);
    //.then(response => response.data)
}

// export function deleteNote(id){
//         return axios.post(`${BASE_URL}/api/note/delete/${id}`)
//                 .then(response => response.data)
//                 .catch(err => Promise.reject(err.message));
// }
// export function createNote(data) {
//         return axios.post(`${BASE_URL}/api/note/create`, 
//         { title: data.title, body: data.body }
//         )      .then(response => {
//                         return response.data
//                 })
//                 .catch(err => Promise.reject(err.message));
// }

// export function updateNote(data, id) {
//         return axios.post(`${BASE_URL}/api/note/update/${id}`, { data })
//                 .then(response => {
//                         return response.data
//                 })
//                 .catch(err => Promise.reject(err.message));
// }