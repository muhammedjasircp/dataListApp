export const getData = async () => {
  const url = 'https://itunes.apple.com/search?term=Michael+jackson';
  const data = await fetch(url);
  console.log(data);
};
