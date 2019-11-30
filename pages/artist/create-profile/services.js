import React from "react";
import Layout from "../../../components/Layout";
import EditServices from "../../../components/artist/EditServices";

class ServicesPage extends React.Component {

  render() {
    return (
      <Layout title={"Services"}>
        <div className="profile">
          <EditServices token={this.props.token} mode="create"></EditServices>
          
        </div>
      </Layout>
    );
  }
}

export default ServicesPage;
