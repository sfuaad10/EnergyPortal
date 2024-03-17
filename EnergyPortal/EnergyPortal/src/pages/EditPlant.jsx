import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const EditPlant = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log(plant);

  useEffect(() => {
    async function fetchData() {
      console.log("triggered!!!");
      try {
        const response = await fetch(`https://localhost:7237/plant/${id}`);
        const data = await response.json();
        if (!response.ok) {
          setError("Couldn't fetch data!");
        }
        setPlant(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, [id]);

  async function formCapture(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const Name = formData.get("Name");
    const Address = formData.get("Address");

    const data = {
      Name: Name,
      Address: Address,
    };

    try {
      const response = await fetch(`https://localhost:7237/plants/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.log("ERROR!!!");
      }

      console.log("Data sent successfully");
      navigate("/plants/info");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      {plant && !error && (
        <form onSubmit={formCapture}>
          <div>
            <label htmlFor="Name">Name</label>
            <input
              id="Name"
              name="Name"
              type="text"
              defaultValue={plant.name}
            />
          </div>

          <div>
            <label htmlFor="Address">Address</label>
            <input
              id="Address"
              name="Address"
              type="text"
              defaultValue={plant.address}
            />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
      {!plant && <p>Loading...</p>}
    </>
  );
};

export default EditPlant;
