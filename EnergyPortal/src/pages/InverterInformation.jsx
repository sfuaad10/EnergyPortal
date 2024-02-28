import { useLoaderData } from "react-router-dom";
import solarInverterData from "../utils/inverterData";
import CustomTable from "../components/CustomTable";

const InverterInformation = () => {
  const inverterData = useLoaderData();

  return (
    <>
      <h3>Inverter Information</h3>
      <CustomTable tableData={inverterData} striped responsive />;
    </>
  );
};

export default InverterInformation;

export async function loader() {
  return solarInverterData;
}
