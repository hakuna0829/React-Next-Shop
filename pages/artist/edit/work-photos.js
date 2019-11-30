import React from "react";
import Layout from "../../../components/Layout";
import EditWorkPhotos from "../../../components/artist/EditWorkPhotos";

export default function EditWorkPhotoPage(props) {
  const percent = 67

  return (
    <Layout title={"Work Photos"}>
      <EditWorkPhotos token={props.token} mode="edit"></EditWorkPhotos>
    </Layout>
  );

}