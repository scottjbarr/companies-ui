import React from 'react';
import CompanyRow from './company_row';

class CompanyTable extends React.Component {
  render() {
    const rows = this.props.companies.map(c =>
      <CompanyRow company={c} key={c.id}/>
    );

    return(
      <table className="table table-striped">
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
};

CompanyTable.propTypes = {
    companies: React.PropTypes.array.isRequired,
}

CompanyTable.defaultProps = {
    companies: [],
}

export default CompanyTable;
