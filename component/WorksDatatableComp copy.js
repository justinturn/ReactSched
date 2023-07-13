import * as React from 'react';
import { DataTable, page, setPage, setItemsPerPage, optionsPerPage, itemsPerPage } from 'react-native-paper';

const DatatableComponent = () => {
  const {page, setPage} = React.useState<Number>(0);
  const [numberOfItemsPerPageList] = React.useState([5,10,20,50]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[1]
  );

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

  // const from = page * itemsPerPage;
  // const to = Math.min((page + 1) * itemsPerPage, items.length);
  const from = 0;
  const to = 10;

  
  // React.useEffect(() => {
  //   setPage(0);
  // }, [itemsPerPage]);
  
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Job</DataTable.Title>
        <DataTable.Title numeric>Customer</DataTable.Title>
        <DataTable.Title numeric>Model</DataTable.Title>
        <DataTable.Title numeric>MFG Ship Date</DataTable.Title>
        <DataTable.Title numeric>Net Price</DataTable.Title>
      </DataTable.Header>


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
        numberOfPages={Math.ceil(AXHitems.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${AXHitems.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable>
  );
};

export default DatatableComponent;