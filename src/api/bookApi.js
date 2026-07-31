import { api } from "./axios";

export const getCategoryBooks = async (category, page = 1) => {
  const res = await api.get(`/search.json?subject=${category}&page=${page}`);

  return res.data;
};
