import React from 'react';
import CompanyRow from './company_row';

var CompanyTable = React.createClass({
    getDefaultProps() {
        console.log('CompanyTable : getDefaultProps');
        return {companies: []};
    },

    render() {
        var rows = [];
        this.props.companies.forEach(function(company) {
            rows.push(<CompanyRow company={company} key={company.id} />);
        });

        return(
            <table className="table table-striped">
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
});

export default CompanyTable;
