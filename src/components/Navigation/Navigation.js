import { useSelector } from "react-redux";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { NavLink } from "react-router-dom";
import { authSelectors } from "redux/auth";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "rgb(59, 11, 73)",
    fontSize: "1.17em",
  },
  activeLink: {
    color: "rgba(131, 30, 131, 0.712)",
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        <HomeRoundedIcon />
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
}
