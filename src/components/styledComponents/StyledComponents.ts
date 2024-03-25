import styled from "styled-components";

// Common styles
const inputStyles = `
  background-color: #292929;
  border-radius: 10px;
  border: 1px solid #292929;
  color: #a6a6a6;
  padding: 0 10px;
  width: 100%;
  height: 32px;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
`;

const hStyles = `
  color:#fff;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  display: flex;
  gap:8px;
  cursor:pointer;
`;

// Styled components
export const SectionDiv = styled.div`
  margin: 0 auto;
  border-radius: 8px;
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 35px;
  padding: 3.75% 5% 4.25%;
  width: 90%;
`;

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
`;

export const StyledInput = styled.input`
  ${inputStyles};
`;

export const StyledInputLarge = styled.input`
  ${inputStyles};
  grid-column: span 2;
`;

export const H2Title = styled.h2`
  ${hStyles};
  font-size: 30px;
  line-height: 36px;
`;

export const H3Title = styled.h3`
  ${hStyles};
  font-size: 24px;
  line-height: 26px;
`;

export const StyledLargeP = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  color: #a6a6a6;
  background-color: #292929;
  padding: 4px;
  border-radius: 12px;
  font-size: 30px;
  line-height: 36px;
  max-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &&:hover {
    color: #27b394;
  }
`;
