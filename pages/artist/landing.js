import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import SignupModal from "../../components/auth/signup";

class ArtistLandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showSignUp: false
    };
  }

  showSignUpModal = () => {
    this.setState({
      ...this.state,
      showSignUp: !this.state.showSignUp
    });
    console.log("Signup modal", this.state.showSignUp);
  };

  render() {
    return (
      <Layout title={"Artist Landing"}>
        <div className="overall" id="artist-landing">
          <div className="content">
            <div className="container">
              <div className="artist_landing join">
                <div className="artist_landing_item">
                  <h3>Get access to hundreds of new clients</h3>
                  <Link href="/artist/signup">
                    <a className="btn btn-primary">Join now</a>
                  </Link>
                </div>
              </div>
              <div className="artist_landing">
                <div className="artist_landing_item">
                  <h3>
                    Marketing content about the benefits of joining as an artist
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SignupModal 
            show={this.state.showSignUp}
            onClose={this.showSignUpModal}            
        >
          This message from modal.
        </SignupModal>
      </Layout>
    );
  }
}

export default ArtistLandingPage;
