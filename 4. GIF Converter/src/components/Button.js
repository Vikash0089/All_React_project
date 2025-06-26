import styled from 'styled-components';
const Btn = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
`;

export default function Button({ onClick }) {
    return <Btn onClick={onClick}>Convert to GIF</Btn>;
}
