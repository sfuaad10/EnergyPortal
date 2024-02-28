import { useLoaderData } from "react-router-dom";
import CustomTable from "../components/CustomTable";
import plantData from "../utils/plantsData";

const PlantInformation = () => {
  const plantData = useLoaderData();

  return (
    <>
      <h3>Plant Information</h3>
      <CustomTable tableData={plantData} />;
    </>
  );
};

export default PlantInformation;

export async function loader() {
  //get plants in json format and return this
  return plantData;
}
