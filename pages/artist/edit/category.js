import React from "react";
import Layout from "../../../components/Layout";
import EditCategory from "../../../components/artist/EditCategory";

export default function EditCategoryPage(props) {
    return (
      <Layout title={"Select Categories"}>

        <div className="profile">
          <div className="container">
            <div className="row">
                <EditCategory token={props.token} mode="edit"></EditCategory>
            </div>
          </div>
        </div>

      </Layout>
    );

}
