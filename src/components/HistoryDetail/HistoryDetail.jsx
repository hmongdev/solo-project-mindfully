import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function HistoryDetail(props) {
    return (
        <tr>
            <td className="emoji">{props.detail.feeling}</td>
            <td className="reflection">{props.detail.reflection}</td>
        </tr>
    );
}
