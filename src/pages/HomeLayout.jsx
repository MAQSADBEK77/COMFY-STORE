import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";
function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <NavBar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <main className="container-css py-8">
          <Outlet />
        </main>
      )}
    </>
  );
}

export default HomeLayout;
