"use client";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Input from "../global/Input";
import Button from "../global/Button";

interface AuthInputProps {
  register: UseFormRegister<FieldValues>;
  variant: string;
  errors: FieldErrors;
  isLoading?: boolean;
}

const AuthInput: React.FC<AuthInputProps> = ({
  register,
  errors,
  variant,
  isLoading,
}) => {
  return (
    <>
      {variant === "REGISTER" && (
        <Input
          placeholder="Your Name"
          errors={errors}
          id="name"
          label="Full Name"
          register={register}
          disabled={isLoading}
          required={true}
        />
      )}
      <Input
        errors={errors}
        id="email"
        type="email"
        label="Email Address"
        register={register}
        placeholder="example@domain.com"
        disabled={isLoading}
        required={true}
      />
      <Input
        errors={errors}
        id="password"
        type="Password"
        label="Password"
        register={register}
        placeholder="password"
        disabled={isLoading}
        required={true}
      />
      <div>
        <Button disabled={isLoading} fullWidth type="submit">
          {variant === "SIGNIN" ? "Sign in" : "Register"}
        </Button>
      </div>
    </>
  );
};

export default AuthInput;
