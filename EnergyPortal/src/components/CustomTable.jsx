import { Table, Container } from "react-bootstrap";
import { useState } from "react";

const CustomTable = ({ tableData, ...props }) => {
  const [itemQuery, setitemQuery] = useState("");

  const handleItemQuery = (e) => {
    setitemQuery(e.target.value);
  };

  //make this uppercase

  const tableHeaders = tableData.length > 0 ? Object.keys(tableData[0]) : [];

  return (
    <Container>
      <Table responsive {...props}>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) =>
            data.name.toLowerCase().includes(itemQuery.toLowerCase()) ? (
              <tr key={index}>
                {tableHeaders.map((header, index) => (
                  <td key={index}>{data[header]}</td>
                  //give me the value for
                  //this record associated with X header
                ))}
              </tr>
            ) : null
          )}
        </tbody>
      </Table>

      <input
        type="text"
        placeholder="Search inverter"
        value={itemQuery}
        onChange={handleItemQuery}
      />
    </Container>
  );
};

export default CustomTable;
