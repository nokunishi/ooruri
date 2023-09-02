"use client";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import AuthInput from "./AuthInput";
import AuthSocialButton from "./AuthSocialButton";
import axios from "axios";

type Variant = "SIGNIN" | "REGISTER";

export default function AuthForm() {
  const [variant, setVariant] = useState<Variant>("SIGNIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "SIGNIN") {
      {
        setVariant("REGISTER");
      }
    } else {
      setVariant("SIGNIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      axios.post("/api/register", data);
    }

    if (variant === "SIGNIN") {
      // nextAuth SignIn
    }
  };

  return (
    <div
      className="mt-8 h-auto sm:w-full sm:max-w-md bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10
      justify-center items-center relative"
    >
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          errors={errors}
          register={register}
          variant={variant}
          isLoading={isLoading}
        ></AuthInput>
      </form>
      <AuthSocialButton isLoading={isLoading}></AuthSocialButton>
      <div className="justify-content text-center items-center mt-6 text-sm">
        <div className="justify-content text-center text-gray-500 inline-flex px-1">
          {variant === "SIGNIN"
            ? "Don't have an account yet?"
            : "Already have an account?"}
        </div>
        <div
          onClick={toggleVariant}
          className="justify-content text-center underline cursor-pointer inline-flex px-1"
        >
          {variant === "SIGNIN" ? "Register here" : "Sign-in here"}
        </div>
      </div>
    </div>
  );
}
