import AuthForm from "@/components/forms/auth-form";
import { AUTH_FORM_TYPE } from "@/constants";
import React from "react";

const page = () => {
  return <AuthForm type={AUTH_FORM_TYPE.SIGN_UP as FormType} />;
};

export default page;
