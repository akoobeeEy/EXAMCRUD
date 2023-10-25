import { Fragment, useEffect, useState } from "react";
import { Button, Image, Input, Space, Table, message } from "antd";
import { request } from "../../../../server";

export const TableData = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => <h4>{name}</h4>,
    },
    {
      title: "Vender Code",
      dataIndex: "code",
      key: "lastName",
    },
    {
      title: "Image",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => <Image width={100} src={avatar} />,
    },

    {
      title: "Country",
      key: "country",
      dataIndex: "country",
    },
    {
      title: "Company",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div >
          <Space size={"middle"}>
            <Button
              type="primary"
            >
              Edit
            </Button>

            <Button
              danger
              type="primary"
           
            >
              Delete
            </Button>
          </Space>
        </div>
      ),
    },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      let { data } = await request("Products");
      setData(data);
    } catch (err) {
      message.error(err);
    }
  }

  return (
    <Fragment>
      <Table
        bordered
        title={() => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            
          >
            <h1>
              Все товары <span >({data.length})</span>
            </h1>
            <div   style={{ width: "300px", height: "40px" }}>
          
              <Input />
            </div>
              <button>
                Noviy
              </button>
          </div>
        )}
        columns={columns}
        dataSource={data.map((item, index) => ({ ...item, key: index }))}
      />
    </Fragment>
  );
};
