export default function Resultimg({ gifUrl }) {
    return gifUrl ? <img src={gifUrl} alt="Converted GIF" width="250" /> : null;
}
