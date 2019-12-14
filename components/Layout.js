const Layout = props => {
  return (
    <div>
      <header className="header">
        <div className="container header-container">
          <h2 className="heading">Where in the world</h2>
          <button>
            <img src="/moon.svg" alt="Moon icon" className="moon-icon" />
            <p>Dark Mode</p>
          </button>
        </div>
      </header>
      <main className="body">{props.children}</main>
      <style jsx>{`
        .header {
          box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.18);
          background-color: #fff;
        }
        .header-container {
          display: flex;
          align-items: center;
        }
        .heading {
          margin-right: auto;
        }
        .moon-icon {
          width: 12px;
          margin-right: 8px;
        }
        button {
          display: flex;
          padding: 10px;
          border: none;
          align-items: center;
          font-size: 300px;
          font-size: 14px;
          outline: none;
        }
      `}</style>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          font-family: "Nunito Sans", sans-serif;
          line-height: 1.5;
          font-weight: 300;
          margin: 0;
          min-height: 100vh;
          background-color: hsl(0, 0%, 98%);
        }
        img {
          width: 100%;
        }
        .container {
          max-width: 1250px;
          width: 100%;
          padding: 0 1em;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default Layout;
