import { FormItem, Button } from "../components/shared";
import { useNavigate } from "react-router-dom";
import React from "react";

export const Register = () => {
  const navigate = useNavigate();

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
              Register to get started
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* username */}
          <FormItem label="Full name" name="full_name" type="text" />

          {/* email */}
          <FormItem label="Email" name="email" type="email" />

          {/* Phone */}
          <FormItem label="Mobile number" name="mobile_number" type="number" />

          {/* password */}
          <FormItem label="Password" name="password" type="password" />

          {/* confirm password */}
          <FormItem
            label="Retype password"
            name="retype_password"
            type="password"
          />

          <Button>REGISTER</Button>
        </form>

        <p className="mt-4 flex gap-2 items-center">
          <span>Already have an account?</span>
          <span
            onClick={() => navigate("/login")}
            className="text-accent underline font-medium"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};
