import getCurrentUser from "@/actions/getCurrentUser";
import Navbar from "@/components/Navbar";

const Home = async () => {
  const currentUser = await getCurrentUser();
  console.log("currentUser", currentUser);

  return (
    <main>
      <>
        <Navbar currentUser={currentUser} />
      </>
    </main>
  );
};

export default Home;
