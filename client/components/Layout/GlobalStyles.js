export default () => {
  return (
    <>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
            --color-primary: #ee5253;
            --color-gray: #777777;
            --color-dark: #222;
            --color-light-dark: #484848;
            --color-light-gray: #dddbdd;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            margin: 0;
            padding: 0;
            font-size: 1.5rem;
            color: var(--color-light-dark);
          }
          a {
            text-decoration: none;
          }

          ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }

          a {
            text-decoration: none;
          }

          button {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
          }
        `}
      </style>
    </>
  );
};
