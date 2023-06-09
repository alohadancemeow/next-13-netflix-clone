import React from "react";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

type Props = {};

const Profile = async (props: Props) => {
  const session = await getServerSession(authOptions);

  console.log("session", session);

  return <div>Profile</div>;
};

export default Profile;
