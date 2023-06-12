"use client";

import InfoModal from "@/components/InfoModal";
import useGetMovieById from "@/hooks/useGetMovieById";
import useInfModal from "@/hooks/useInfoModal";
import { SafeUser } from "@/types";

type Props = {
  currentUser?: SafeUser | null;
};

const ModalProvider = ({ currentUser }: Props) => {
  const { movieId, isOpen, closeModal } = useInfModal();

  const { data, error, isLoading } = useGetMovieById(movieId);

  //   if (!data || error) return null;

  return (
    <>
      <InfoModal
        data={data}
        onClose={closeModal}
        visible={isOpen}
        currentUser={currentUser}
      />
    </>
  );
};

export default ModalProvider;
