import React from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface IProps {
  label?: string;
  type?: string;
  placeholder?: string;
  name: string;
  id?: string;
}

export const FormItem = (props: IProps) => {
  const { label, type, placeholder, name, id } = props;
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-lg font-medium">
        {label}
      </label>
      <div className="flex items-center gap-2 bg-dark-tertiary rounded-sm">
        <input
          id={id}
          name={name}
          className="bg-transparent py-4 px-3 outline-none flex-1 placeholder:tracking-tight placeholder:leading-tight"
          placeholder={placeholder}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
        />

        {type === "password" && (
          <span
            onClick={togglePasswordVisibility}
            className="absolute cursor-pointer right-6 text-light-secondary"
          >
            {!showPassword ? (
              <EyeSlashIcon className="w-6" />
            ) : (
              <EyeIcon className="w-6" />
            )}
          </span>
        )}
      </div>
    </div>
  );
};
