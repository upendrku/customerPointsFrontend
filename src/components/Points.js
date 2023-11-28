import React, { Component } from 'react';
import ReactTable from "react-table-6";
import 'react-table-6/react-table.css';
import { CSVLink } from 'react-csv';

class Points extends Component {
  
    constructor(props) {
        super(props);
        this.state = { customers: [] };
    }

    componentDidMount() {
        fetch('https://customer-points-backend.herokuapp.com/customers')
        .then((response) => response.json()) 
        .then((responseData) => { 
            this.setState({ 
                customers: responseData,
            }); 
        })
        .catch(err => console.error(err));
    }
  
    render() {
        const columns = [{
            Header: 'First Name',
            accessor: 'firstName'
        }, {
            Header: 'Last Name',
            accessor: 'lastName'
        }, {
            Header: 'Number of Purchases',
            accessor: 'numberPurchases'
        }, {
            Header: 'January Points',
            accessor: 'januaryPoints'
        }, {
            Header: 'February Points',
            accessor: 'februaryPoints'
        }, {
            Header: 'March Points',
            accessor: 'marchPoints'
        }, {
            Header: 'Total Points',
            accessor: 'totalPoints'
        },]

        return (
            <div className="App">
                <ReactTable data={this.state.customers} columns={columns} filterable={true} pageSizeOptions={[5, 10, 15, 20, 25, 50]} defaultPageSize={15}/>
                <CSVLink className="btn btn-secondary" filename={"customers.csv"} data={this.state.customers} separator=";">Export CSV</CSVLink>
            </div>
        );
    }
}

export default Points;