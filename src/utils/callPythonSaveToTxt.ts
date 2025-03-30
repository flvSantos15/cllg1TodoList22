import { execFile } from "child_process";
import { TTodo } from "../shared/models/todo";

/**
 * Calls the Python script to save an array of objects to a .txt file.
 * @param data - The array of objects to save.
 * @param fileName - The name of the file (without extension).
 */
export const callPythonSaveToTxt = (
  data: TTodo[],
  fileName: string
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const pythonScriptPath = `${__dirname}/../../../utils/saveToText.py`;

    // Convert data to JSON string
    const jsonData = JSON.stringify(data);

    // Execute the Python script
    execFile(
      "python3",
      [pythonScriptPath, fileName, jsonData],
      (error, stdout, stderr) => {
        if (error) {
          console.error("Error executing Python script:", stderr);
          return reject(error);
        }

        console.log("Python script output:", stdout);
        resolve();
      }
    );
  });
};
