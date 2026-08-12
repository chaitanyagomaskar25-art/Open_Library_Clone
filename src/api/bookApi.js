import axios from "axios";
import { api } from "./axios";

export const getCategoryBooks = async (category, page = 1) => {
  const res = await api.get(`/search.json?subject=${category}&page=${page}`);

  return res.data;
};

export const getbookDetails = async (workId) => {
  const res = await api.get(`/works/${workId}.json`);
  return res.data;
};

export const getBookEditions = async (workId) => {
  const res = await api.get(`/works/${workId}/editions.json`);
  return res.data;
};

export const getEditionDetails = async (editionId) => {
  const res = await api.get(`/books/${editionId}.json`);
  return res.data;
};

export const getBookShelves = async (workId) => {
  const res = await api.get(`/works/${workId}/bookshelves.json`);
  return res.data;
};

export const getSearchBooks = async (query, page = 1, language = "eng") => {
  const res = await api.get(
    `/search.json?q=${encodeURIComponent(query)}&language=${language}&page=${page}`,
  );
  return res.data;
};


export const getTrendingBooks = async (
  period = "daily",
  page = 1,
  limit = 20,
) => {
  const res = await api.get(`/trending/${period}.json`, {
    params: {
      page,
      limit,
    },
  });

  return res.data;
};
