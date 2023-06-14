import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  margin: 20px 0;
  justify-content: center;
  gap: 20px;
`;

export const Item = styled.li``;

export const Btn = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 8px;
  border: 2px solid #3e3a3a;
  cursor: pointer;
  font-weight: 600;
	color: #1c1010;
  background-color: #e9dfdf;
  box-shadow: 0px 2px 4px rgba(179, 21, 21, 0.56), 0px 2px 4px rgba(236, 171, 171, 0.06),
    1px 4px 6px;

  &:hover,
  &:focus {
    color: white;
    background-color: rgba(179, 21, 21, 0.56);
    cursor: pointer;
  }
`;
