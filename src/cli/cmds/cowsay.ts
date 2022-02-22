import { cowsay } from "cowsayjs";

export const isCowsay = (text: string): boolean => {
  return text
    .split(" ")
    .includes("cowsay");
}

export const exec = (text: string): string => {
  const cowsayText = text.replaceAll("cowsay", "").trim();
  return cowsay(cowsayText, { wrap: null });
};
