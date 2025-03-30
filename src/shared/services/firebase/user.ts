import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { v4 as uuidV4 } from "uuid";
import { TUser } from "../../models/user";
import { fireStoreDB } from "./index";

interface ICreateUsertPayload {
  email: string; // unico
  displayName: string;
}

export const createUserFirebaseService = async ({
  displayName,
  email,
}: ICreateUsertPayload) => {
  const collecttionPath = "users";

  const userData = {
    id: uuidV4(),
    displayName,
    email: email,
    createdAt: new Date(),
    lastLoginAt: new Date(),
  };

  try {
    const userRef = doc(fireStoreDB, collecttionPath, userData.email);

    await setDoc(userRef, userData);

    return userData;
  } catch (error) {
    return error;
    // throw new Error(error)
  }
};

export const updateUserFirebaseService = async (userEmail: string) => {
  const collecttionPath = `users`;

  const userData = {
    lastLoginAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    const userRef = doc(fireStoreDB, collecttionPath, userEmail);

    await setDoc(userRef, userData, { merge: true });
  } catch (error) {
    // @ts-ignore
    throw new Error(error);
  }
};

export const checkUserExists = async (email: string) => {
  if (!email) {
    throw new Error("User not found");
  }

  const collecttionPath = `users`;

  try {
    const userRef = collection(fireStoreDB, collecttionPath);

    const userResponse = await getDocs(userRef);

    const documents = userResponse.docs?.map((document) =>
      document.data()
    ) as TUser[];

    const user = documents.find((dc) => dc.email === email);

    return user;
  } catch (error) {
    // @ts-ignore
    throw new Error(error);
  }
};
