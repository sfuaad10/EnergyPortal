import { useLoaderData } from "react-router-dom";
import solarInverterData from "../utils/inverterData";
import CustomTable from "../components/CustomTable";

const Information = () => {
  const inverterData = useLoaderData();

  return <CustomTable tableData={inverterData} />;
};

export default Information;

export async function loader() {
  return solarInverterData;
}
