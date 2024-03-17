import { Table } from "antd";
import { useNavigate } from "react-router-dom";

const CustomTable = ({ tableData, type }) => {
  console.log("my type is!!!", type);
  const navigate = useNavigate();

  console.log("the data source", { tableData });

  const tableHeaders =
    tableData.length > 0 ? [...Object.keys(tableData[0]), "actions"] : [];

  async function deletePlant(id) {
    console.log(`https://localhost:7237/${type}/${id}`);
    const response = await fetch(`https://localhost:7237/${type}/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("deleted successfully");
      navigate(`/${type}/info`);
    } else {
      console.log("Error deleting this...");
    }
  }

  return (
    <>
      <Table
        dataSource={tableData}
        columns={tableHeaders.map((header) => {
          if (header === "actions") {
            return {
              title: header,
              dataIndex: header,
              key: header,
              render: (text, record) => (
                <>
                  <button
                    onClick={() => navigate(`/${type}/edit/${record.id}`)}
                  >
                    Edit
                  </button>

                  <button onClick={() => deletePlant(record.id)}>Delete</button>
                </>
              ),
            };
          } else {
            return {
              title: header,
              dataIndex: header,
              key: header,
            };
          }
        })}
        scroll={{
          y: 600,
        }}
      />
    </>
  );
};

export default CustomTable;
