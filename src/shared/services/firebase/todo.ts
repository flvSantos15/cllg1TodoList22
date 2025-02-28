import { fireStoreDB } from "./index"
import { collection, doc, getDocs, setDoc } from "firebase/firestore"
import { v4 as uuidV4 } from "uuid"

interface ICreateTodoPayload {
  name: string
  isCompleted: boolean
}

export interface ITask {
  id: number
  name: string
  isCompleted: boolean
}

export const createTodoFirebaseService = async ({
  name,
  isCompleted
}: ICreateTodoPayload) => {
  const collecttionPath = "todos"

  const todoData = {
    id: uuidV4(),
    name,
    isCompleted
  }

  try {
    const todoRef = doc(fireStoreDB, collecttionPath, todoData.id)

    await setDoc(todoRef, todoData)

    return todoData
  } catch (error) {
    return error
    // throw new Error(error)
  }
}

export const getTodosFirebaseService = async (): Promise<ITask[]> => {
  const collecttionPath = "todos"

  try {
    const todoRef = collection(fireStoreDB, collecttionPath)

    const response = await getDocs(todoRef)

    const documents = response.docs?.map((document) =>
      document.data()
    ) as ITask[]

    return documents ?? []
  } catch (error) {
    // @ts-ignore
    throw new Error(error)
  }
}
