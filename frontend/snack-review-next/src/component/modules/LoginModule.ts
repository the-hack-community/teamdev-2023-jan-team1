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
export const HandleSignUp = (props: Props) => {
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
      // console.log(res.data);
      const client: any = res.headers["client"];
      const token: any = res.headers["access-token"];
      const uid: any = res.headers["uid"];
      Cookies.set("client", client);
      Cookies.set("access-token", token);
      Cookies.set("uid", uid);
    })
    .catch((error) => {
      // console.log(error.response);
      Cookies.remove("client");
      Cookies.remove("access-token");
      Cookies.remove("uid");
    });
};
