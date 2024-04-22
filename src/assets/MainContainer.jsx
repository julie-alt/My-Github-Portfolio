import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import RepoList from "../pages/RepoList";
import GitHubProfile from "../components/Profile";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MainContainer() {
  return (
    <Box sx={{ flexGrow: 1 }} className="mainContainer">
      <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, md: 8 }}  >
        
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <RepoList />
          </Item>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} >
          <Item>
            <GitHubProfile />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
