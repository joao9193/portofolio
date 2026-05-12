import styled from "styled-components";

export const customStyles = {
  overlay: {
    backgroundColor: "rgba(8, 9, 13, 0.78)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    zIndex: 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
  },
  content: {
    position: "relative",
    inset: "auto",
    margin: 0,
    padding: 0,
    width: "min(1100px, 100%)",
    maxHeight: "92vh",
    overflow: "hidden",
    background: "linear-gradient(180deg, #1d1f29 0%, #14151c 100%)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
  },
};

export const StyledModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 22px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  flex: 0 0 auto;
`;

export const StyledModalTitle = styled.h3`
  background: none;
  -webkit-text-fill-color: unset;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin: 0;
  padding: 0;
`;

export const StyledModalCloseButton = styled.button`
  background-image: none;
  background-color: rgba(255, 255, 255, 0.06);
  position: relative;
  inset: auto;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 1.8rem;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 200ms ease, transform 200ms ease;

  &:hover {
    background-image: none;
    background-color: rgba(255, 255, 255, 0.14);
    transform: scale(1.06);
  }

  svg {
    fill: #fff;
    width: 18px;
    height: 18px;
  }
`;

export const StyledModalBody = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  padding: 18px 18px 22px;
  display: flex;
  flex-direction: column;
`;
