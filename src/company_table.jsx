// import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './index.scss';
import React from 'react';
import $ from 'jquery';

var CompanyTable = React.createClass({
    getInitialState() {
        console.log('CompanyTable : getInitialState');
        return {companies: []};
    },

    componentDidMount() {
        console.log('CompanyTable : componentDidMount');
        const url = 'https://companies-146403.appspot.com/api/companies';

        $.getJSON(url, (response) => {
            this.setState({ companies: response })
        });
    },

    render() {
        const companies = this.state.companies.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.exchange}:{item.symbol}</td>
                </tr>
            )
        });

        return(
            <table className="table table-striped">
                <tbody>
                    {companies}
                </tbody>
            </table>
        )
    }
});

export default CompanyTable;
