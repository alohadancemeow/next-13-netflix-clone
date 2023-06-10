import getCurrentUser from "@/actions/getCurrentUser";
import ProfileCilent from "./ProfileCilent";

type Props = {};

const Profile = async (props: Props) => {
  const currentUser = await getCurrentUser();

  return <ProfileCilent currentUser={currentUser} />;
};

export default Profile;
