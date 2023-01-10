import axios from "axios";

export const getNoticiasRequest = async () =>
  await axios.get("https://cristobal4-production.up.railway.app/");

export const getNoticiaRequest = async (id) =>
  await axios.get("https://cristobal4-production.up.railway.app/", id);

export const createNoticiaRequest = async (noticia) => {
  const form = new FormData();
  for (let key in noticia) {
    form.append(key, noticia[key]);
  }

  return await axios.post(
    "https://cristobal4-production.up.railway.app/",
    form,
    {
      headers: {
        "content-Type": "multipart/form-data",
      },
    }
  );
};
