import LoginGoogleButton from './LoginGoogleButton';
import LoginGithubButton from './LoginGithubButton';
import LoginHeader from './LoginHeader';

export default function LoginPage() {
  return (
    <>
      <LoginHeader /><div className="h-[calc(100vh-80px)] bg-gray-300 flex flex-col items-center justify-center gap-5">
        <h1>Login Page</h1>
        <div className="w-500 h-500 p-12 flex flex-col justify-center items-center gap-12 bg-gray-700 rounded-xl shadow-md">
          <LoginGoogleButton />
          <LoginGithubButton />
        </div>
      </div>
    </>
  );
};