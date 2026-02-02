import LoginForm from "@/components/form/LoginForm";
import React, { Suspense } from "react";

export default function LoginPage() {
  return (
    <div>
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}
