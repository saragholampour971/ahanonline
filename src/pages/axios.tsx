import axios from "axios";
import IUser from "../types/user";
import {useState} from 'react';

// you don't need anything else to import

interface Props {
  // TODO: add user type
}

export default  function AxiosTest(props: Props) {
  const [getstate, setstate] = useState([]);
  axios.get("/api/users")
    .then((res) => {
      setstate(res.data);
    
    })
    .catch((err) => {
    console.log(err);
  })
  
  // TODO: once you get data map through data and show them name
  return (
    <div>Simple Axios And Data Fetching :: Edit src/pages/axios.tsx
      <h4>list of members</h4>
      {getstate.map((user) => (
        <div key={user.name}>
          {user.name}
        </div>
      ))}
      {/* {console.log(getstate)} */}
  </div>
 
  );
}

// TODO: fetch data with axios to use in app
// RestApi: axios.get("/api/users") => [{name: "amir"}]
// NOTE: data fetching should happen in server side
// Resource: https://nextjs.org/docs/basic-features/data-fetching
// Resource: https://github.com/axios/axios
