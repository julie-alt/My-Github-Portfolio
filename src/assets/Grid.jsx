// ResponsiveGrid.jsx
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ff00003f",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// eslint-disable-next-line react/prop-types
export default function ResponsiveGrid({ repos }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8 }}>
        {repos.map((repo, index) => (
          <Grid item xs={12} sm={8} md={6} lg={4} xl={2} key={index}>
            <Item>
              <h3>
                <Link to={`/repo/${repo.name}`} className="link-style">
                  {repo.name}
                </Link>
              </h3>
              <p className="profile">{repo.description}</p>
              <p className="profile">Stars: {repo.stargazers_count}</p>
              <p className="profile">
                {" "}
                Language: {repo.language === null ? "none" : repo.language}
              </p>
              <p className="profile">Visibility: {repo.visibility}</p>
              <p className="profile">Forks: {repo.forks}</p>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
