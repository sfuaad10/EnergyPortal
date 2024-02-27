import { useLoaderData } from "react-router-dom";
import solarInverterData from "../utils/inverterData";
import { Table, Container } from "react-bootstrap";
import { useState } from "react";

const Information = () => {
  const [inverterQuery, setinverterQuery] = useState("");
  const inverterData = useLoaderData(); //gets the data returned from loader

  const handleInverterQuery = (e) => {
    setinverterQuery(e.target.value);
  };

  return (
    <Container>
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Power</th>
            <th>NominalPower</th>
          </tr>
        </thead>
        <tbody>
          {inverterData.map(
            (inverter) =>
              inverter.name
                .toLowerCase()
                .includes(inverterQuery.toLowerCase()) && (
                <tr key={inverter.id}>
                  <td>{inverter.name}</td>
                  <td>{inverter.brand}</td>
                  <td>{inverter.power}</td>
                  <td>{inverter.nominalPower}</td>
                </tr>
              )
          )}
        </tbody>
      </Table>
      <input
        type="text"
        placeholder="Search inverter"
        value={inverterQuery}
        onChange={handleInverterQuery}
      />
    </Container>
  );
};

export default Information;

export async function loader() {
  return solarInverterData;
}
