import { useLoaderData } from "react-router-dom";
import CustomTable from "../components/CustomTable";

const PlantInformation = () => {
  const plantData = useLoaderData();

  return (
    <>
      <h3>Plant Information</h3>
      <CustomTable tableData={plantData} type="plants" />
    </>
  );
};

export default PlantInformation;

export async function loader() {
  //get plants in json format and return this
  const response = await fetch("https://localhost:7237/plants");
  const plantData = await response.json();
  return plantData;
}
