import React, { useState } from "react";
import EmailLogin from "./EmailLogin";
import PasswordLogin from "./PasswordLogin";

const LoginPage: React.FC = () => {
  const [stage, setStage] = useState<"email" | "password">("email");
  const [user, setUser] = useState<{
    first_name: string;
    last_name: string;
    password: string;
  } | null>(null);

  const handleNext = (user: {
    first_name: string;
    last_name: string;
    password: string;
  }) => {
    setUser(user);
    setStage("password");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {stage === "email" ? (
        <EmailLogin onNext={handleNext} />
      ) : (
        user && <PasswordLogin user={user} />
      )}
    </div>
  );
};

export default LoginPage;
