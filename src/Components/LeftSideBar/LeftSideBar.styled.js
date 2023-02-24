// Imports
import styled from "styled-components";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

// styles of offcanvas container
export const OffcanvasContainer = styled(Offcanvas)`
  position: fixed;
  width: 250px !important;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.primary} !important;

  // styles of offcanvas body
  .offcanvas-body {
    //  styles of items inside offcanvas body
    .dropdown-item {
      color: ${({ theme }) => theme.color.primary} !important;
      margin: 10px 0;
      :hover {
        color: ${({ theme }) => theme.color.hover} !important;
      }
    }
  }
`;

// styles of header
export const Header = styled(Offcanvas.Header)`
  flex-direction: column;

  // styles of titles
  .offcanvas-title {
    margin-top: 20px;
    align-self: center;
    text-transform: uppercase;
    font-family: cursive;
    color: ${({ theme }) => theme.color.primary};
  }
`;

// styles of add new tasks button
export const TaskBtn = styled(Button)`
  margin: 20px;
  background-color: ${({ theme }) => theme.canvas} !important;
  width: 100%;
  :hover {
    background-color: ${({ theme }) => theme.background.hover} !important;
  }
  border: none;
`;