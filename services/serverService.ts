import { SignUp } from "@/models/auth.model";
import { UserData } from "@/models/user.model";
import httpClient from "@/utils/httpClient";
import axios from "axios";

type signProps = {
  username: string;
  password: string;
};

export const signUp = async (user: signProps): Promise<SignUp> => {
  const response = await httpClient.post<SignUp>("/authen/register", user);
  return response.data;
};
