import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function HistoryDetail(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    // const handleEditClick = () => {
    //     //! 2. dispatch student info to redux store
    //     dispatch({
    //         type: 'SET_EDIT_STUDENT',
    //         payload: props.detail,
    //     });
    //     //! 3. route user to historydetail/:id
    //     history.push('/edit');
    // };

    return (
        <tr>
            <td className="emoji">{props.detail.emoji_code}</td>
            <td className="reflection">{props.detail.reflection}</td>
        </tr>
    );
}

export default HistoryDetail;
