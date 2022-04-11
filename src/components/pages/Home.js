import { Grid } from "@mui/material";

const Home = () => {
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Home Page</h1>
        <hr />
        <p>Welcome to the React Quiz App</p>
      </Grid>
    </Grid>
  </>;
};

export default Home;
