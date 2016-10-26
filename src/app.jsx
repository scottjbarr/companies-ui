import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import $ from 'jquery';
import CompanyTable from './company_table';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    }
  }

  componentDidMount() {
    console.log('App : componentDidMount');
    const url = 'https://companies-146403.appspot.com/api/companies';
    $.getJSON(url, (response) => {
      this.setState({ companies: response });
    });
  }

  render() {
    return (
      <span>
        <h1>Companies</h1>
        <p>This toy app is built using</p>
        <ul>
          <li>
            an <a href="https://companies-146403.appspot.com/api/companies">API</a> hosted on Google App Engine
          </li>
          <li>
            a client that is served from
            an <a href="http://companies-ui.s3-website-ap-southeast-2.amazonaws.com/">AWS S3 bucket</a>
          </li>
          <li>
            via a <a href="https://d2ks7hkmj9nqhr.cloudfront.net/">AWS CloudFront Distribution</a>
          </li>
        </ul>
        <CompanyTable companies={this.state.companies}/>
      </span>
    )
  }
}
