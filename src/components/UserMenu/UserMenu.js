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
  return (
    <div style={styles.container}>
      <h3 style={styles.name}>Hello, email</h3>
      <button type="button" onClick={() => {}}>
        Log Out
      </button>
    </div>
  );
}
