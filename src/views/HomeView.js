import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { authSelectors } from "redux/auth";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUserName);
  return (
    <div style={styles.container}>
      {!isLoggedIn ? (
        <Typography variant="h1" style={styles.title} color="textSecondary">
          {" "}
          Welcome! Log In to start work with your contacts!
        </Typography>
      ) : (
        <Typography variant="h1" style={styles.title} color="textSecondary">
          {" "}
          Hey, {name}, check out your contacts!
        </Typography>
      )}
    </div>
  );
}
