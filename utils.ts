import axios from "axios";

export const debugLog = (...args) => {
  if (process.env.NODE_ENV === "development") {
    console.log(...args);
  }
};

export const fetch = {
  get: async (url: string) => {
    try {
      const data = await axios.get(`${process.env.HOST}${url}`);
      //return in snake_case
    } catch (error) {
      console.log(url, error);
    }
  },
};

export const tileToSlug = (title: String) => {
  return title.toLowerCase().replace(/\s/g, "-");
};
