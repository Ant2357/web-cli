import { cowsay } from "cowsayjs";

export const isCowsay = (text: string): boolean => {
  return text.includes("cowsay");
}

export const exec = (text: string): string => {
  return cowsay(text);
};
