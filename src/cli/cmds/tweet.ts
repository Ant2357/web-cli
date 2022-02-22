
export const isTweet = (text: string): boolean => {
  return text
    .split(" ")
    .includes("tweet");
}

export const open = (text: string): void => {
  const msg = text.replaceAll("tweet", "");
  const tweet = encodeURIComponent(`@ant2357 ${msg}`);
  window.open(`https://twitter.com/intent/tweet?text=${tweet}`, "_blank");
};
