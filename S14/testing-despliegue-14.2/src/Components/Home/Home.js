const USERNAME = process.env.REACT_APP_USERNAME;
const PASSWORD = process.env.REACT_APP_PASSAWORD;

const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <div>
        <p>User is {USERNAME}</p>
        <p>Password is {PASSWORD}</p>
      </div>
    </div>
  );
};

export default Home;
