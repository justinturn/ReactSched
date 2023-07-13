import * as React from 'react';
import { DataTable } from 'react-native-paper';



const TableExample = () => {
const api_url = "http://localhost:3000/schedule";
//const api_url = "https://jsonplaceholder.typicode.com/users";

// console.log(fetchScheduleData(api_url))
const [data, setData] = React.useState([])

  //Fetchinfo callback
  const fetchInfo = () => { 
    return fetch(api_url) 
            .then((res) => res.json()) 
            .then((d) => setData(d)) 
    }
    
    React.useEffect(() => {
      fetchInfo();
    }, [])

var items = [1,2,3];


return(
  <div className="App">
      <h1 style={{ color: "green" }}>List of jobs test</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 12, color: 'black' }}>{new Date(dataObj.MfgShipDate).toLocaleDateString()}</p>
              <p style={{ fontSize: 20, color: 'black' }}>{dataObj.jobNum}</p>
              <p style={{ fontSize: 12, color: 'black' }}>{"$" + dataObj.netPrice}</p>
            </div>
          );
        })}
      </center>
    </div>
)
  // return (

  //   <ul>
  //     {items.map(item =>(
  //       <li>{item}</li>
  //     ))}
  //   </ul>


  // );
};

export default TableExample;