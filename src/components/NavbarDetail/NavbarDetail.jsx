import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './NavbarDetail.css';

//mui
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';

export default function NavbarDetail({ item }) {
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch({
            type: 'DELETE_ITEM',
            payload: item.id,
        });
        history.push('/dashboard');
    }

    return (
        <div className="navbar-detail-container">
            <button
                className="navbar-detail"
                onClick={() => {
                    history.push('/dashboard');
                }}
            >
                <ReplyRoundedIcon
                    style={{ fontSize: 60, color: 'limegreen' }}
                />
                Return
            </button>
            <button className="navbar-detail" onClick={handleDelete}>
                <DeleteForeverIcon style={{ fontSize: 60, color: 'maroon' }} />
                Delete
            </button>
        </div>
    );
}
