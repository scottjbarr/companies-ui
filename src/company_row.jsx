import React from 'react';

class CompanyRow extends React.Component {
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
};

CompanyRow.propTypes = {
  company: React.PropTypes.object.isRequired,
}

export default CompanyRow;
