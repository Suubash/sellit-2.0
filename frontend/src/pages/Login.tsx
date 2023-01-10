import { FormItem, Button } from "../components/shared";
import React from "react";

export const Login = () => {
  // Submit button
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting...");
  };

  return (
    <div className="text-light leading-tight tracking-tight bg-gradient-to-b from-dark-secondary to-dark">
      <div className="padding-custom">
        <div className="flex items-center justify-center my-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-accent">
              Welcome to sellit 2.0
            </h3>
            <p className="text-light-secondary font-medium">
              Login to get started
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* email */}
          <FormItem label="Email" name="email" type="email" />

          {/* password */}
          <FormItem label="Password" name="password" type="password" />

          <Button>LOGIN</Button>
        </form>

        <p className="mt-4 flex gap-2 items-center">
          <span>Dont have an account?</span>
          <span className="text-accent underline font-medium">
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};
