import { useSignIn } from "./sign-in.model";
import { SignInView } from "./sign-in.view";

export function SignIn() {
  const methods = useSignIn();

  return <SignInView {...methods} />;
}
