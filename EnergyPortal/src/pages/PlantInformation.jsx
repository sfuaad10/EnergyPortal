import { useLoaderData } from "react-router-dom";
import CustomTable from "../components/CustomTable";
import plantData from "../utils/plantsData";

const PlantInformation = () => {
  const plantData = useLoaderData();

  return <CustomTable tableData={plantData} />;
};

export default PlantInformation;

export async function loader() {
  //get plants in json format and return this
  return plantData;
}
