
const Rows = ({ info }) => {
    const name = Object.keys(info)
    return <tr key={info}>{name.map((key) => <td key={key}>{(info[key])} </td>)}</tr>;
};
export default Rows