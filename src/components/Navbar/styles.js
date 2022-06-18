import styled from "styled-components";

const StyledNavbar = styled.nav``;

const StyledNavbarContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledNameContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledName = styled.p`
  margin: 0;
  width: 500px;
  color: var(--n900);
  font-size: var(--fs-h600);
  cursor: default;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledListContainer = styled.div`
  background-color: var(--n400);
  color: var(--n10);
  border-bottom-left-radius: 16px;
`;

const StyledList = styled.ul`
  max-width: 500px;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
`;

const StyledListItem = styled.li`
  margin: 0;
  cursor: default;
  font-size: var(--fs-h600);

  &:hover {
    text-decoration: underline;
  }
`;

export {
  StyledNavbar,
  StyledNavbarContainer,
  StyledNameContainer,
  StyledName,
  StyledListContainer,
  StyledList,
  StyledListItem,
};
