import styled from 'styled-components';
const Btn = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  margin: 10px;
`;

export default function Dbutton({ gifUrl }) {
    return (
        gifUrl && (
            <a href={gifUrl} download="converted.gif">
                <Btn>Download GIF</Btn>
            </a>
        )
    );
}
