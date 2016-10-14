import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CompanyTable from './company_table';

export default class App extends React.Component {
    render() {
        return (
            <span>
                <h1>Companies</h1>
                <p>
                    This toy app is built using
                    <ul>
                        <li>
                            an <a href="https://companies-146403.appspot.com/api/companies">API</a> hosted on Google App Engine</li>
                        <li>a client that is served from an <a href="http://companies-ui.s3-website-ap-southeast-2.amazonaws.com/">AWS S3 bucket</a></li>
                        <li>via a <a href="https://d2ks7hkmj9nqhr.cloudfront.net/">AWS CloudFront Distribution</a></li>
                        </ul>
                </p>
                <CompanyTable/>
            </span>
        )
    }
}
