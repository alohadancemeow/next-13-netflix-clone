import getCurrentUser from "@/actions/getCurrentUser";

const Home = async () => {
  const currentUser = await getCurrentUser();
  console.log("currentUser", currentUser);

  return (
    <main>
      <div>Hello netflix</div>
    </main>
  );
};

export default Home;
