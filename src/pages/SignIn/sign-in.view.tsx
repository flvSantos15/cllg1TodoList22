import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Header } from "../../components/Header";
import { useSignIn } from "./sign-in.model";

type SignInViewProps = ReturnType<typeof useSignIn>;

export function SignInView(props: SignInViewProps) {
  const { handleGithubSignIn, handleGoogleSignIn } = props;

  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
        {/* <form
          onSubmit={handleSubmit(handleSignIn)}
          className="p-6 rounded-lg border border-solid border-[#333333] shadow-md w-[30rem] space-y-4"
        >
          <h1 className="text-2xl font-bold mb-4">Sign In</h1>

          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <Error text={errors?.email?.message} />}

          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <Error text={errors.password.message} />}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center w-full xl:w-[5.625rem] md:w-[100%] sm:w-full h-[3.375rem] p-4 gap-2 blue-dark rounded-lg transition delay-50 ease-in-out enabled:hover:bg-[#4ea8de] disabled:cursor-not-allowed"
          >
            Sign In
          </button>
        </form> */}

        <button
          onClick={handleGithubSignIn}
          className="flex h-[72px] gap-5 px-6 py-5 rounded-lg bg-gray-600 items-center border border-gray-600 hover:border-gray-400"
        >
          <FaGithub className="size-5" />

          <span className="text-gray-200 text-lg leadind-base">
            Entrar com GitHub
          </span>
        </button>

        <button
          onClick={handleGoogleSignIn}
          // className="flex items-center justify-center mt-4 p-2 gap-2  border border-gray-500 rounded w-[85%] md:w-[30rem] hover:bg-gray-800 transition"
          className="flex h-[72px] gap-5 px-6 py-5 rounded-lg bg-gray-600 items-center border border-gray-600 hover:border-gray-400"
        >
          <FcGoogle className="size-5" />

          <span className="text-gray-200 text-lg leadind-base">
            Entrar com Google
          </span>
        </button>
      </div>
    </>
  );
}
