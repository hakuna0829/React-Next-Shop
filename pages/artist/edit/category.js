import React from "react";
import Layout from "../../../components/Layout";
import EditCategory from "../../../components/artist/EditCategory";

export default function EditCategoryPage(props) {
    return (
      <Layout title={"Select Categories"}>
        <EditCategory token={props.token} mode="edit"></EditCategory>
      </Layout>
    );
}
