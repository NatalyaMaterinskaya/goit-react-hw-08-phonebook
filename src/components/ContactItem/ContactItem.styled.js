import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 4px;
  padding: 4px 4px;
  border: 2px solid #e7e9fc;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.8), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;


export const Btn = styled.button`
  margin-top: 8px;
  padding: 4px 4px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: #ffffff;
  font-size: 12px;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #536be4;
  }
`;