import React from 'react';

const CompanyRow = (props) => (
  <tr key={props.company.id}>
    <td>{props.company.name}</td>
    <td>
      {props.company.exchange}:{props.company.symbol}
    </td>
  </tr>
);

CompanyRow.propTypes = {
  company: React.PropTypes.object.isRequired,
}

export default CompanyRow;
