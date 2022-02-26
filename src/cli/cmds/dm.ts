
export const isDm = (text: string): boolean => {
  return text
    .split(" ")
    .includes("dm");
}

export const open = (text: string): void => {
  const msg = text.replaceAll("dm", "").trim();
  const dmText = encodeURIComponent(msg);
  window.open(`https://twitter.com/messages/compose?recipient_id=4432778053&text=${dmText}`, "_blank");
};
