import { SignUp } from "@/models/auth.model";
import { UserData } from "@/models/user.model";
import axios from "axios";

type signProps = {
  username: string;
  password: string;
};

// export const signUp = async (user: signProps): Promise<SignUp> => {
//   const { data: response } = await httpClient.post<SignUp>(
//     `/authen/register`,
//     user
//   );
//   return response;
// };

export const signUp = async (user: signProps): Promise<SignUp> => {
  const response = await axios.post<SignUp>(
    "http://localhost:8085/api/v2/authen/register",
    user
  );

  return response.data;
};
