import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  signInWithGithub,
  signInWithGoogle,
} from "../../shared/services/firebase/auth";
import { SigInSchema, signInSchema } from "./sign-in.schema";

export const useSignIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SigInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const handleSignIn = ({ email, password }: SigInSchema) => {
    console.log(email, password);
    reset();
  };

  const handleGithubSignIn = async () => {
    await signInWithGithub();
  };

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  };

  return {
    errors,
    handleSignIn,
    handleSubmit,
    isSubmitting,
    register,
    handleGithubSignIn,
    handleGoogleSignIn,
  };
};
