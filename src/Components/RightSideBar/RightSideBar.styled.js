import styled from "styled-components";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";

// styles of offcanvas container
export const OffcanvasContainer = styled(Offcanvas)`
  position: fixed;
  width: 250px !important;
  flex-direction: column !important;
  z-index: 100;
  
  background-color: ${({ theme }) => theme.background.primary} !important;

  .offcanvas-body {
    .dropdown-item {
      color: ${({ theme }) => theme.color.primary} !important;
      margin: 5px 0;
      :hover {
        color: ${({ theme }) => theme.color.hover} !important;
      }
    }
  }

  hr {
    opacity: 0.1;
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

// styles of header
export const Header = styled(Offcanvas.Header)`
  flex-direction: column;

  .offcanvas-title {
    margin-top: 20px;
    align-self: center;
    text-transform: uppercase;
    font-family: cursive;
    color: ${({ theme }) => theme.color.primary};
  }
`;

// styles of profile button
export const ProfileBtn = styled(Button)`
  margin: 20px;
  background-color: ${({ theme }) => theme.background.secondary} !important;
  width: 80%;
  border: none;
  color: ${({ theme }) => theme.color.secondaryText} !important;
  font-style: italic;
  
  a {
    text-decoration: none;
    color: inherit;
  }

  :hover {
    background-color: ${({ theme }) => theme.background.hoverBtnColor} !important;
  }
`;

export const IcoContainer = styled.span`
  img {
    border-radius: 9999px;
  }
`;

export const DeleteBtn = styled.span`
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  
  :hover {
    color: ${({ theme }) => theme.color.hover};
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormSwitcher = styled(Form)`
  display: flex;
  flex-direction: row;

  .form-switch .form-check-input {
    margin-left: 0 !important;
    display: flex !important;
    flex: 1 0 !important;
    position: relative;
    color: ${({ theme }) => theme.canvas};
    cursor: pointer;
  }
`;

export const ButtonContainer = styled(Button)`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: inherit;
  border: none;
  margin: 10px;

  span {
    color: ${({ theme }) => theme.color.primary};
  }

  :hover,
  :focus-visible {
    background-color: ${({ theme }) => theme.background.primary} !important;
    box-shadow: none;
  }
`;

// Adjusted progress bar and task percentage for visibility in light theme
export const ProgressBarContainer = styled(ProgressBar)`
  .progress-bar {
    background-color: ${({ theme }) =>
      theme.id === "light" ? "#FFA500" : theme.canvas} !important; // Orange for light mode
    color: ${({ theme }) => (theme.id === "light" ? "#000" : "#fff")}; // Text color
  }
`;

export const ProgressContainer = styled.div`
  align-items: center;
  color: ${({ theme }) =>
    theme.id === "light" ? "#000" : theme.color.primary}; // Black for light mode
  margin: 10px 0;
  width: 100%;
  
  span {
    display: block;
    margin-bottom: 10px;
    color: ${({ theme }) =>
      theme.id === "light" ? "#FFA500" : theme.color.primary}; // Orange for light mode
  }
`;
