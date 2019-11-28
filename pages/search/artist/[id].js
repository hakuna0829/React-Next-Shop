import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

const ArtistProfile = (props) => {
    const [percent, setValue] = useState(props.value);
    const [loading, setLoading] = useState(true);

    
  return (
    <Layout title={"Guest Homepage"}>
        <div>Artist profile page</div>
    </Layout>
  );
};

export default ArtistProfile;
