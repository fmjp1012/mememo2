import LoginGoogleButton from "./LoginGoogleButton";
import LoginGithubButton from "./LoginGithubButton";
import LoginHeader from "./LoginHeader";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 my-20">
      <h1 className="text-3xl font-bold">Login Page</h1>
      <div className="w-500 h-500 p-12 flex flex-col justify-center items-center gap-12 bg-gray-700 rounded-xl shadow-md">
        <LoginGoogleButton />
        <LoginGithubButton />
      </div>
    </div>
  );
}
