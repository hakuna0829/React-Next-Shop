import React from "react";
import Layout from "../../../components/Layout";
import EditProfile from "../../../components/artist/EditProfile";

export default function CreateProfile(props) {
  return (
    <Layout title={"Profile"}>
      <EditProfile token={props.token} mode="edit"></EditProfile>
    </Layout>
  );
}