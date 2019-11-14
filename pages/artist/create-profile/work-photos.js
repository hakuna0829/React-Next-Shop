import React from 'react';
import Link from 'next/link';

import Layout from '../../../components/Layout';

class WorkPhotoPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            artist: {}
        };

    }

    filesSelectedHandler = e => {
        let reader = new FileReader();
        let files = e.target.files

        files.forEach(file => {
            console.log(file)
            if(file) {
                reader.readAsDataURL(file)

                reader.onloadend = () => {
                    this.setState({
                        avatar_filename: file.name,
                        avatar: reader.result
                    });
                }

            }
            
        })
    }

    render() {
        return (
            <Layout title={'Work Photos'}>
                <div className="suggest">
                    <h1> Work Photos </h1>
                    <h2> Select Images </h2>
                    <div className="row profile-step">
                        <div className="col-lg-6">
                            <div className="form-group">
                            <input id="images" placeholder="images" type="file" 
                                    name="images"
                                    multiple
                                    className="form-control" onChange={this.filesSelectedHandler}
                                    accept=".jpg,.jpeg,.png,.bmp"
                                    value="" 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="page-navs">
                        <Link href={`/artist/create-profile/services`}><a className="btn btn-secondary">Back</a></Link>
                        <Link href={`/artist/create-profile/category`}><a className="btn btn-info">Next</a></Link>
                    </div>
                </div>
                <style jsx>{`
                    .suggest {
                        text-align: center;
                    }
                    .page-navs a {
                        margin-right: 30px;
                    }
                `}</style>
            </Layout>
        );
    }
  }
  
  export default WorkPhotoPage;