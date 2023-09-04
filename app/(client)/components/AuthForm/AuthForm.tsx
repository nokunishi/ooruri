"use client";
import { useCallback, useEffect, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import AuthInput from "./AuthInput";
import AuthSocialButton from "./AuthSocialButton";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Variant = "SIGNIN" | "REGISTER";

export default function AuthForm() {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("SIGNIN");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/users");
      console.log("Authenticated");
    }
  }, [session?.status, router]);

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
      axios
        .post("/api/register", data)
        .then(() => {
          toast.success("Registration Success!");
        })
        .then(() => {
          setVariant("SIGNIN");
        })
        .catch(() => toast.error("Something went wrong!"))
        .finally(() => setIsLoading(false));
    }

    if (variant === "SIGNIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error(callback?.error);
            // toast.error(callback?.error); // debugging
          } else if (callback?.ok) {
            toast.success("Login Success!");
            router.push("/users");
          }
        })
        .finally(() => setIsLoading(false));
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
