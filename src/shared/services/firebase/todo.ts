import { fireStoreDB } from "./index";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { v4 as uuidV4 } from "uuid";
import { TTodo } from "../../models/todo";

interface ICreateTodoPayload {
  name: string;
  isCompleted: boolean;
}

export const createTodoFirebaseService = async ({
  name,
  isCompleted,
}: ICreateTodoPayload) => {
  const collecttionPath = "todos";

  const todoData = {
    id: uuidV4(),
    name,
    isCompleted,
    createdAt: new Date(),
  };

  try {
    const todoRef = doc(fireStoreDB, collecttionPath, todoData.id);

    await setDoc(todoRef, todoData);

    return todoData;
  } catch (error) {
    return error;
    // throw new Error(error)
  }
};

export const getTodosFirebaseService = async (): Promise<TTodo[]> => {
  const collecttionPath = "todos";

  try {
    const todoRef = collection(fireStoreDB, collecttionPath);

    const response = await getDocs(todoRef);

    const documents = response.docs?.map((document) =>
      document.data()
    ) as TTodo[];

    return documents ?? [];
  } catch (error) {
    // @ts-ignore
    throw new Error(error);
  }
};

interface IUpdateTodoPayload {
  id: string;
  name: string;
}

export const updateTodoFirebaseService = async ({
  id,
  name,
}: IUpdateTodoPayload) => {
  const collecttionPath = "todos";

  const todoData = {
    name,
  };

  try {
    const todoRef = doc(fireStoreDB, collecttionPath, id);

    await setDoc(todoRef, todoData, { merge: true });
  } catch (error) {
    // @ts-ignore
    throw new Error(error);
  }
};

interface IToggleTodoPayload {
  id: string;
  isCompleted: boolean;
}

export const toggleTodoFirebaseService = async ({
  id,
  isCompleted,
}: IToggleTodoPayload) => {
  const collecttionPath = "todos";

  try {
    const todoRef = doc(fireStoreDB, collecttionPath, id);

    await setDoc(todoRef, { isCompleted }, { merge: true });
  } catch (error) {
    // @ts-ignore
    throw new Error(error);
  }
};

export const deleteTodoFirebaseService = async (id: string) => {
  const collecttionPath = "todos";

  try {
    const todoRef = doc(fireStoreDB, collecttionPath, id);

    await deleteDoc(todoRef);
  } catch (error) {
    // @ts-ignore
    throw new Error(error);
  }
};
