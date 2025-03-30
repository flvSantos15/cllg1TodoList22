import * as fs from "fs";
import { TTodo } from "../shared/models/todo";

/**
 * Saves an array of objects to a .txt file.
 * @param data - The array of objects to save.
 * @param fileName - The name of the file (without extension).
 */
export const saveArrayToTxt = (data: TTodo[], fileName: string): void => {
  if (!Array.isArray(data)) {
    throw new Error("Input data must be an array of objects.");
  }

  const filePath = `/${fileName}.txt`;
  const fileContent = JSON.stringify(data, null, 2); // Pretty-print JSON

  fs.writeFileSync(filePath, fileContent, "utf8");
  console.log(`File saved successfully at: ${filePath}`);
};
