import axios from 'axios';

export const API = axios.create({
    baseURL: "https://api.v2.kontenbase.com/query/api/v1/0b55d1c0-775a-4d4e-88b0-e11a6249da55"
});