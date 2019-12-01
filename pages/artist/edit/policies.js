import React from "react";
import Layout from "../../../components/Layout";
import EditPolicies from "../../../components/artist/EditPolicies";

export default function PoliciesPage(props) {
    return (
        <Layout title={"Policies"}>
        <EditPolicies token={props.token} mode="edit"></EditPolicies>
        </Layout>
    );
}
