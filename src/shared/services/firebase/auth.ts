import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { setCookie } from "nookies";

import { TUser } from "../../models/user";
import { auth } from "./index";
import {
  checkUserExists,
  createUserFirebaseService,
  updateUserFirebaseService,
} from "./user";

// signin with github auth provider
export const signInWithGithub = async () => {
  const provider = new GithubAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;

    const userData: TUser = {
      email: user.email as string,
      displayName: user.displayName as string,
      photoURL: user.photoURL as string,
    };

    const userExists = await checkUserExists(userData.email);
    if (!userExists) {
      await createUserFirebaseService({
        displayName: userData.displayName,
        email: userData.email,
      });
    }

    await updateUserFirebaseService(userData.email);

    // save token to cookie
    setCookie(undefined, "token", JSON.stringify(token), {
      maxAge: 60 * 60 * 24 * 10, // 10 days
      path: "/",
    });
    // save user to cookie
    setCookie(undefined, "user", JSON.stringify(userData), {
      maxAge: 60 * 60 * 24 * 10, // 10 days
      path: "/",
    });
  } catch (error) {
    console.error("Error signing in with GitHub: ", error);
  }
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;

    const userData: TUser = {
      email: user.email as string,
      displayName: user.displayName as string,
      photoURL: user.photoURL as string,
    };

    // check if user exists in database
    // if not, create user in database
    const userExists = await checkUserExists(userData.email);
    if (!userExists) {
      await createUserFirebaseService({
        displayName: userData.displayName,
        email: userData.email,
      });
    }
    // if exists, update user (lastLoginAt) in database
    await updateUserFirebaseService(userData.email);

    // save token to cookie
    setCookie(undefined, "token", JSON.stringify(token), {
      maxAge: 60 * 60 * 24 * 10, // 10 days
      path: "/",
    });
    // save user to cookie
    setCookie(undefined, "user", JSON.stringify(userData), {
      maxAge: 60 * 60 * 24 * 10, // 10 days
      path: "/",
    });
  } catch (error) {
    console.error("Error signing in with GitHub: ", error);
  }
};

export const signOutFirebase = async () => {
  await signOut(auth);
};
