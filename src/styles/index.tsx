import { Global, css } from "@emotion/react";

function GlobalStyle() {
  return (
    <Global
      styles={css`
        body {
          font-family: "Noto Sans", "Arial";
          padding: 32px 80px;
        }
      `}
    />
  );
}

export { GlobalStyle };
