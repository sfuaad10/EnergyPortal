import { useLoaderData } from "react-router-dom";
import solarInverterData from "../utils/inverterData";
import CustomTable from "../components/CustomTable";

const InverterInformation = () => {
  const inverterData = useLoaderData();

  return <CustomTable tableData={inverterData} striped responsive />;
};

export default InverterInformation;

export async function loader() {
  return solarInverterData;
}
