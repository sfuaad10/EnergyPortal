const HomePage = () => {
  return (
    <>
      <main>
        <article>
          <h2>Welcome to the home page!</h2>
          <p>
            You can view statistics about the irradiance, inverters and modules
          </p>
          <ul>
            <h5>What needs to be added:</h5>
            <li>Basic data retrieval ✅</li>
            <li>Ability to login/logout basic state for now</li>
            <li>Add inverter data from asp.net minimal API</li>
            <li>Add CI/CD Github Actions</li>
            <li>Add some unit tests</li>

            <li>
              Implement weather data for some plants, add auto fetch to get
              newest weather data every 5 mins can mock
            </li>
          </ul>
        </article>
      </main>
    </>
  );
};

export default HomePage;
