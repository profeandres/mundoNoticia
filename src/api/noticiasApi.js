import axios from "axios";

const API_URI = process.env.API_URI;

export const getNoticiasRequest = async () => await axios.get(API_URI)