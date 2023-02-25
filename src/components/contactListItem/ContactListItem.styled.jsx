import styled from 'styled-components';

const Div = styled.div`
  font-size: 40px;
  margin-right: 40px;
`;
const Span = styled.span`
  margin-left: 25px;
`;
const Button = styled.button`
  padding: 12px 25px;
  font-size: 30px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 10px;
  &:hover,
  &:focus {
    background-color: #2641b5;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 10px;
    scale: 1.1;
  }
`;
export { Span, Button, Div };
