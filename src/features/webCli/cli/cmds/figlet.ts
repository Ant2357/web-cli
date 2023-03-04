// @ts-ignore
import figlet from "figlet";
// @ts-ignore
import standard from 'figlet/importable-fonts/Standard.js'

figlet.parseFont('Standard', standard);

export const isFiglet = (text: string): boolean => {
  return text
    .split(" ")
    .includes("figlet");
}

export const exec = (text: string): string => {
  const figletText = text.replaceAll("figlet", "").trim();
  return figlet.textSync(figletText);
};
