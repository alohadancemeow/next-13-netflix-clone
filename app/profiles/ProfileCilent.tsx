"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";

import UserCard from "@/components/UserCard";
import { SafeUser } from "@/types";

type Props = {
  currentUser?: SafeUser | null;
};

const ProfileCilent = ({ currentUser }: Props) => {
  const router = useRouter();

  const selectProfile = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col">
        <h1 className="text-3xl text-center text-white md:text-6xl">
          Who&#39;s watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => selectProfile()}>
            <UserCard name={currentUser?.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCilent;
