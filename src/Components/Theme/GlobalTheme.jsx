import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text};
    transition: all 0.2s ease-in-out;
  }
`;
