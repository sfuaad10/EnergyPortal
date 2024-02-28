import { Table } from "antd";

const CustomTable = ({ tableData }) => {
  //make this uppercase

  const tableHeaders = tableData.length > 0 ? Object.keys(tableData[0]) : [];

  return (
    <>
      <Table
        dataSource={tableData}
        columns={tableHeaders.map((header) => ({
          title: header,
          dataIndex: header,
          key: header,
        }))}
        scroll={{
          y: 600,
        }}
      />
    </>
  );
};

export default CustomTable;
