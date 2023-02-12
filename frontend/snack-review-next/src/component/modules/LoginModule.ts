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

const HandleSignUp = (props: Props) => {
  const BASEURL = BaseUrl();
  const { userName, email, password, passwordVerification } = props;

  const generalApiInterface = axios.create({
    baseURL: BASEURL,
  });

  return new Promise((resolve) => {
    generalApiInterface
      .post("auth", {
        name: userName,
        email,
        password,
        password_confirmation: passwordVerification,
      })
      .then((res) => {
        const { client } = res.headers;
        const { token } = res.headers;
        const { uid } = res.headers;
        Cookies.set("client", client);
        Cookies.set("access-token", token);
        Cookies.set("uid", uid);
        const response = { resState: "succes" };
        resolve(response);
      })
      .catch((error) => {
        Cookies.remove("client");
        Cookies.remove("access-token");
        Cookies.remove("uid");
        const response = { resState: "faild", erroy: error.response.data.errors.full_messages };
        resolve(response);
      });
  });
};

export default HandleSignUp;
