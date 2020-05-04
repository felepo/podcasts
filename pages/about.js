export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img src="/platzi-logo.png" alt="Platzi Logo" />
        <h1>Creado por Fernando</h1>
        <p>Curso de Next.js con React.js</p>

        <style jsx>
          {`
            h1 {
              color: white;
              text-align: center;
            }
            p {
              color: white;
              text-align: center;
            }
            img {
              max-width: 60%;
              display: block;
              margin: 0 auto;
              margin-top: 150px;
              margin-bottom: 50px;
            }
          `}
        </style>

        <style jsx global>
          {`
            body {
              background: #1a2a35;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
