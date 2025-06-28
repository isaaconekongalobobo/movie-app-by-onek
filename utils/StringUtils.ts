export const truncateByWords = (text : string, maxWords: number = 47) => {
  const words = text.split(" ");
  return words.length > maxWords 
    ? words.slice(0, maxWords).join(" ") + "..." 
    : text;
}