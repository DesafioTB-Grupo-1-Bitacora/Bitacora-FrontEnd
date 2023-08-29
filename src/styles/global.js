import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: 'Kumbh Sans', sans-serif !important;
  }

  .leaflet-pane { z-index: 1 !important; }
  .leaflet-bottom { z-index: 0 !important; }
`;
