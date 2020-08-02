import axios from "axios";

export const mainUrl = ` https://hacker-news.firebaseio.com/v0/`;
export const topStoriesUrl = `${mainUrl}topstories.json`;
export const storyUrl = `${mainUrl}item/`;

export const getStoryIds = async () => {
  const result = await axios.get(topStoriesUrl).then(({data}) => data);

  return result;
};
