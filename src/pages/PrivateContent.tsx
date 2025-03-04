import useAuth from "../hooks/useAuth";

function PrivateContent() {
  const { logout } = useAuth();

  return (
    <>
      <header>
        <p>Privati informacija</p>
      </header>
      <aside>
        <p>Test</p>
        <button onClick={logout}>Atsijungti</button>
      </aside>
      <section>sekcija</section>
      <footer>Footer</footer>
    </>
  );
}

export default PrivateContent;
