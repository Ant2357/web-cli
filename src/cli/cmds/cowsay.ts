import { cowsay } from "cowsayjs";

export const isCowsay = (text: string): boolean => {
  return text
    .split(" ")
    .includes("cowsay");
}

export const exec = (text: string): string => {
  return cowsay(text, { wrap: null });
};
