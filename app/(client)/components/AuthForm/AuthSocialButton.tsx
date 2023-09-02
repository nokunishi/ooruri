import { IconType } from "react-icons";
import clsx from "clsx";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { useState } from "react";

interface AuthSocialButtonProps {
  isLoading: boolean;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({ isLoading }) => {
  const [currIsLoading, setIsLoading] = useState(isLoading);

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth Social Sign IN
  };

  return (
    <div className=" mt-8 relative flex flex-column items-center justify-center">
      <div className="items-center justify-center w-full">
        <div className="border-t h-30 border-gray-300">
          {" "}
          <span className=" text-gray-700 text-sm"> Or continue with ..</span>
        </div>
        <div className="mt-6 flex flex-row">
          <button
            type="button"
            onClick={() => socialAction("github")}
            className={clsx(`inline-flex w-full justify-center rounded-md px-4 py-2
                text-gray-500"
                ring-1
              ring-gray-300
                hover: bg-gray-50
                focus: outline-offset-0
              `)}
          >
            <BsGithub></BsGithub>
          </button>
          <button
            type="button"
            onClick={() => socialAction("google")}
            className={clsx(`inline-flex w-full justify-center rounded-md px-4 py-2
                text-gray-500"
                ring-1
              ring-gray-300
                hover: bg-gray-50
                focus: outline-offset-0
              `)}
          >
            <BsGoogle></BsGoogle>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthSocialButton;
