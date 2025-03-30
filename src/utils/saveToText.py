import json
import os
import sys


def save_array_to_txt(data, file_name):
    """
    Saves an array of objects to a .txt file.
    
    :param data: The array of objects to save.
    :param file_name: The name of the file (without extension).
    """
    if not isinstance(data, list):
        raise ValueError("Input data must be a list of objects.")
    
    file_path = os.path.join(os.path.dirname(__file__), f"{file_name}.txt")
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(json.dumps(data, indent=2))  # Pretty-print JSON
    
    print(f"File saved successfully at: {file_path}")

if __name__ == "__main__":
    # Read arguments from the command line
    file_name = sys.argv[1]
    data = json.loads(sys.argv[2])  # Parse JSON string from arguments

    save_array_to_txt(data, file_name)