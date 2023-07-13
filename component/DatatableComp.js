import * as React from 'react';
import { DataTable } from 'react-native-paper';

const numberOfItemsPerPageList = [12, 25, 50];
const formatAsCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',})

const MyComponent = () => {

  ////////////////////////////////////Load AXH DATA//
const api_url = "http://localhost:3000/schedule";
const [AXHitems, setData] = React.useState([])

//Fetchinfo callback
const fetchInfo = () => { 
  return fetch(api_url) 
          .then((res) => res.json()) 
          .then((d) => setData(d)) 
  }
  
  //Load Data
  React.useEffect(() => {
    fetchInfo();
  }, [])

/////////////////////////////////////////////////////////END LOAD//

  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, AXHitems.length);
  let DollarSum = 0
  
  AXHitems.slice(from, to).map((item) => (DollarSum += item.netPrice))


  React.useEffect(() => {
     setPage(0);
  }, [numberOfItemsPerPage]);

  return (
    <DataTable>
            <DataTable.Header>
        <DataTable.Title  sortDirection='ascending' >Job</DataTable.Title>
        <DataTable.Title numeric>Customer</DataTable.Title>
        <DataTable.Title numeric>Model</DataTable.Title>
        <DataTable.Title numeric >MFG Ship Date</DataTable.Title>
        <DataTable.Title numeric>Net Price</DataTable.Title>
      </DataTable.Header>
      {/* rows */}
      {AXHitems.slice(from, to).map((item) => (
        <DataTable.Row key={item.jobNum}>
          <DataTable.Cell>{item.jobNum}</DataTable.Cell>
          <DataTable.Cell string> {item.customer}</DataTable.Cell>
          <DataTable.Cell numeric> {item.model}</DataTable.Cell>
          <DataTable.Cell numeric>{new Date(item.MfgShipDate).toLocaleDateString()}</DataTable.Cell>
          <DataTable.Cell numeric>${item.netPrice}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(AXHitems.length / numberOfItemsPerPage)}
        onPageChange={page => setPage(page)}
        label={`${from + 1}-${to} of ${AXHitems.length}`}
        showFastPaginationControls
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        //numberOfItemsPerPage={numberOfItemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        //selectPageDropdownLabel={'Rows per page'}
      />
      <DataTable.Header>
        Net Price Total: {formatAsCurrency.format(DollarSum)}
      </DataTable.Header>
    </DataTable>
  );
};

export default MyComponent;