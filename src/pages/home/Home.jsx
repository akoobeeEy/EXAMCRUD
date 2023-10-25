import { useEffect, useState } from "react";
import { message } from "antd";
import { request } from "../../server";
import { EmptyData } from "./components/emptyData";
import { TableData } from "./components/table";

export const Home = () => {

  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const {data} = await request.get("Products");
      setData(data)
    } catch (err) {
      message.error(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
     {data.length === 0 ? <EmptyData/> : <TableData/>}
    </div>
  )
}

export default Home
