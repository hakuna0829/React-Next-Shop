import React from 'react';
import Link from 'next/link';

import Layout from '../../../components/Layout';


class SelectCategoryPage extends React.Component {

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
            <Layout title={'Services'}>
                <div className="suggest">
                    <h1> Services </h1>
                    <h2> What services do you offer? </h2>
                    <div className="form-group">
                        <input id="images" placeholder="images" type="file" 
                                name="images"
                                multiple
                                className="form-control" onChange={this.filesSelectedHandler}
                                accept=".jpg,.jpeg,.png,.bmp"
                                value="" 
                            />
                    </div>

                    <div className="page-navs">
                        <Link href={`/artist/create-profile/`}><a className="btn btn-secondary">Back</a></Link>
                        <Link href={`/artist/create-profile/policies`}><a className="btn btn-info">Done</a></Link>
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
  
  export default SelectCategoryPage;