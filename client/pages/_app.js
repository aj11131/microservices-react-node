import "bootstrap/dist/css/bootstrap.css";
import { buildClient } from "../api/build-client";
import { HeaderComponent } from "../components/header";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <HeaderComponent currentUser={currentUser}></HeaderComponent>
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");
  return { currentUser: data.currentUser };
};

export default AppComponent;
