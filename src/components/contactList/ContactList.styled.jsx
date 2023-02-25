import styled from 'styled-components';

const List = styled.ul`
  padding: 40px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
export { List, ListItem };