"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(`
            form-input
            block
            w-full
            rounded-md
            border-0
            py-2
            shadow-sm
            ring-1
            focus:ring-2
            focus: ring-inset
            focus: ring-gray-300
            errors[id] && "focus: ring-rose-500"
            disabled[id] &&"opacity-50 cursor-default"
          `)}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
};

export default Input;
