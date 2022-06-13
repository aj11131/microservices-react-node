import { useEffect } from "react";
import UseRequest from "../../hooks/use-request";
import Router from "next/router";

const SignoutComponent = () => {
  const { doRequest } = UseRequest({
    url: "/api/users/signout",
    method: "get",
    body: null,
    onSuccess: () => {
      Router.push("/");
    },
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out...</div>;
};

export default SignoutComponent;
