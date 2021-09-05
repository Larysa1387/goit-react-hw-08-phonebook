import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import defaultAvatar from "../icons/dungeon.svg";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    marginRight: 10,
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt="" width="32" style={styles.avatar} />
      <h3 style={styles.name}>Hello, {name}</h3>
      <button type="button" onClick={() => {}}>
        Log Out
      </button>
    </div>
  );
}
