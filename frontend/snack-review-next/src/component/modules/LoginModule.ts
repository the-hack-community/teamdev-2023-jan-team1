// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from "js-cookie";
import { BaseUrl } from "@/component/modules/BaseUrl";

type Props = {
  userName: string;
  email: string;
  password: string;
  passwordVerification: string;
};
export const handleSignUp = (props: Props) => {
  const { userName, email, password, passwordVerification } = props;

  const BASEURL = BaseUrl();

  const generalApiInterface = axios.create({
    baseURL: BASEURL,
  });

  generalApiInterface
    .post("auth", {
      name: userName,
      email,
      password,
      password_confirmation: passwordVerification,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
