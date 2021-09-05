const styles = {
  form: {
    width: 320,
    marginLeft: 50,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

export default function RegisterView() {
  return (
    <div>
      <h1>Registration page</h1>

      <form onSubmit={() => {}} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input
            type="text"
            name="name"
            // value={name}
            onChange={() => {}}
          />
        </label>

        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            // value={email}
            onChange={() => {}}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            // value={password}
            onChange={() => {}}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
