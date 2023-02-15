// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from "js-cookie";
import { BaseUrl } from "@/component/modules/BaseUrl";

type Props = {
  email: string;
  password: string;
};

const PostLogin = (props: Props) => {
  const BASEURL = BaseUrl();
  const { email, password } = props;

  const generalApiInterface = axios.create({
    baseURL: BASEURL,
  });

  return new Promise((resolve) => {
    generalApiInterface
      .post("auth//sign_in", {
        email,
        password,
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
        // console.log(error.response.data.errors);
        Cookies.remove("client");
        Cookies.remove("access-token");
        Cookies.remove("uid");
        const response = { resState: "faild", erroy: error.response.data.errors };
        resolve(response);
      });
  });
};

export default PostLogin;
