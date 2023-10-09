import Image from 'next/image';

export default function LoginGithubButton() {
  return (
    <div className="w-255 h-68">
      <a href="/login/google" className="px-3 py-3.5 flex gap-2 justify-center items-center rounded-xl bg-white shadow-md text-decor-none">
        <div className="">
          <Image src="/images/github_logo.svg" width="30" height="30" alt="github_logo" />
        </div>
        <div className="text-black text-2xl font-bold">Login with Github</div>
      </a>
    </div>
  );
};
