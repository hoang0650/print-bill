import React, { useEffect, useState } from "react";
import { Table, Pagination, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";

async function apiService(endPoint, method, data, headers) {
  const result = await axios({
    url: "http://bill.congvu.tech/api/" + endPoint,
    method,
    data,
    headers,
  });
  if (result.data) return result.data;
  else {
    window.alert("network error");
  }
}
const HistoryPage = ({ handleOnGetDataTable, handleBack }) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const handleOnDeleteDataTable = async (id) => {
    const result = await apiService(`bill`, "delete", { id });
    if (result.status) {
      fetchHistory(1);
      fetchNumberHistory();
      setCurrentPage(1);
    }
  };
  const column = [
    {
      title: "Mã vé",
      dataIndex: "ticket_code",
    },
    {
      title: "Họ tên",
      dataIndex: "name",
    },
    {
      title: "SDT",
      dataIndex: "phone",
    },
    {
      title: "Toa đi",
      dataIndex: "start",
    },
    {
      title: "Toa đến",
      dataIndex: "des",
    },
    {
      title: "",
      dataIndex: "",
      render: (text, record) => (
        <div
          style={{
            display: "flex",
          }}
        >
          <Button onClick={() => handleOnGetDataTable(record)}>Nhập vé</Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              handleOnDeleteDataTable(record._id);
            }}
          >
            Xóa vé
          </Button>
        </div>
      ),
    },
  ];
  useEffect(() => {
    fetchHistory(1);
    fetchNumberHistory();
  }, [currentPage, search]);
  const fetchHistory = async () => {
    const result = await apiService(
      `history?page=${currentPage}&search=${search}`
    );
    if (result.data) {
      setData(result.data);
    }
  };
  const fetchNumberHistory = async () => {
    const result = await apiService(
      `count-bill?page=${currentPage}&search=${search}`
    );
    if (result.data) {
      setCount(result.data);
    }
  };
  return (
    <React.Fragment>
      <div
        style={{
          width: 400,
          marginTop: 50,
          marginLeft: 100,
          marginBottom: 50,
        }}
      >
        <Input
          placeholder="Tìm theo tên, sđt, ga đến, ga đi"
          onChange={(e) => setSearch(e.target.value)}
          prefix={<SearchOutlined />}
        />
      </div>
      <div>
        <p style={{ marginLeft: 20, marginBottom: 0, fontSize: 18 }}>
          Có <span style={{ color: "red" }}>{count}</span> hóa đơn
        </p>
        <Table columns={column} dataSource={data} pagination={false} />
      </div>
      <Pagination
        onChange={(value) => setCurrentPage(value)}
        current={currentPage}
        pageSize={10}
        total={count}
      />
      <Button
        style={{
          width: 100,
          height: 75,
          position: "absolute",
          right: "5%",
        }}
        htmlType="submit"
        type="primary"
        onClick={() => handleBack()}
      >
        Quay lại
      </Button>
    </React.Fragment>
  );
};

export default HistoryPage;
