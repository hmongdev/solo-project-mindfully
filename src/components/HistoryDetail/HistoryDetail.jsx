import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function HistoryDetail(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <tr>
            <td className="emoji">{props.detail.feeling}</td>
            <td className="reflection">{props.detail.reflection}</td>
        </tr>
    );
}

export default HistoryDetail;
