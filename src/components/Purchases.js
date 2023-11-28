import React, { Component } from 'react';
import ReactTable from "react-table-6";
import 'react-table-6/react-table.css';
import { CSVLink } from 'react-csv';

class Purchases extends Component {

    constructor(props) {
        super(props);
        this.state = { purchases: [] };
    }

    componentDidMount() {
        fetch('https://customer-points-backend.herokuapp.com/purchases')
        .then((response) => response.json()) 
        .then((responseData) => { 
            this.setState({ 
                purchases: responseData,
            }); 
        })
        .catch(err => console.error(err)); 
    }
  
    render() {
        const columns = [{
            Header: 'First Name',
            accessor: 'customerFirstName'
          }, {
            Header: 'Last Name',
            accessor: 'customerLastName'
          }, {
            Header: 'Date',
            accessor: 'date'
          }, {
            Header: 'Amount $',
            accessor: 'amount'
          }, {
            Header: 'Points',
            accessor: 'points'
          },]

        return (
            <div className="App">
                <ReactTable data={this.state.purchases} columns={columns} filterable={true} pageSizeOptions={[5, 10, 15, 20, 25, 50]} defaultPageSize={15}/>
                <CSVLink className="btn btn-secondary" filename={"purchases.csv"} data={this.state.purchases} separator=";">Export CSV</CSVLink>            
            </div>
        );
    }
}

export default Purchases;