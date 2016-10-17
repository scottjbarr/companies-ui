import React from 'react';

var CompanyRow = React.createClass({
    render() {
        return(
            <tr key={this.props.company.id}>
                <td>{this.props.company.name}</td>
                <td>
                    {this.props.company.exchange}:{this.props.company.symbol}
                </td>
            </tr>
        )
    }
});

export default CompanyRow;
