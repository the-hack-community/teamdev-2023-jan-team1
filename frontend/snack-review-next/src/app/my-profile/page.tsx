import { CardList } from "@/component/template/home/CardList";
import { MyProfileHeader } from "@/component/template/my-profile/MyProfileHeader";
import { UserInfo } from "@/component/template/my-profile/UserInfo";
import { getUserData } from "@/lib/getData";

const MyProfile = async () => {
  const { articles } = await getUserData();

  return (
    <div className="p-4">
      <div className="mb-20">
        <MyProfileHeader />
        {/* @ts-expect-error Server Component */}
        <UserInfo />
      </div>
      <CardList listTitle="自分の投稿" articles={articles} />
    </div>
  );
};

export default MyProfile;
