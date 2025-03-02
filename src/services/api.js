import axios from 'axios';

const API_BASE = 'https://api.imgflip.com';

export const getMemes = async () => {
  const response = await axios.get(`${API_BASE}/get_memes`);
  return response.data.data.memes;
};

export const generateMeme = async (template_id, texts, username, password) => {
  const params = new URLSearchParams({
    template_id,
    username,
    password,
    text0: texts[0],
    text1: texts[1]
  });

  const response = await axios.post(`${API_BASE}/caption_image`, params);
  return response.data.data.url;
};