"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader } from "@/component/atoms/Loader";
import { CardList } from "@/component/template/home/CardList";
import { MyProfileHeader } from "@/component/template/my-profile/MyProfileHeader";
import { UserInfo } from "@/component/template/my-profile/UserInfo";
import { useUser } from "@/lib/useUser";

const MyProfile = () => {
  const router = useRouter();
  const { data } = useUser();
  const token = Cookies.get("access-token");

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, [router, token]);

  if (!data) return <Loader />;

  return (
    <div className="p-4">
      <div className="mb-20">
        <MyProfileHeader />
        <UserInfo user={data.user} />
      </div>
      <CardList listTitle="自分の投稿" articles={data.articles} />
    </div>
  );
};

export default MyProfile;
