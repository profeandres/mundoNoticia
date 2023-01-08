import axios from "axios";

export const getNoticiasRequest = async () => await axios.get("https://cristobal4-production.up.railway.app/")

export const getNoticiaRequest = async (id) => await axios.get("https://cristobal4-production.up.railway.app/", id)