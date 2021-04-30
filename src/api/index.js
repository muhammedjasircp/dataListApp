export const getData = async () => {
  const url = 'https://itunes.apple.com/search?term=Michael+jackson';
  let data = await fetch(url);
  data = await data.json();
  return data;
};
