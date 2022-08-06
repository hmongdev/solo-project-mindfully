import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './HistoryDetail.css';
import NavbarDetail from '../NavbarDetail/NavbarDetail';

export default function HistoryDetail() {
    const detail = useSelector((store) => store.detail);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_DETAIL',
            payload: id,
        });
    }, []);

    return (
        <>
            <p className="view-title">{detail[0].date_created}</p>
            <div className="main-container">
                <h1 className="detail-heading">I felt...</h1>
                <li className="emoji">{detail[0]?.feeling}</li>

                <h1 className="detail-heading">That day...</h1>
                <li className="reflection">{detail[0]?.reflection}</li>

                <h1 className="detail-heading">I was grateful for...</h1>
                <ol>
                    <li className="gratitude">{detail[0]?.gratitude1}</li>
                    <li className="gratitude">{detail[0]?.gratitude2}</li>
                    <li className="gratitude">{detail[0]?.gratitude3}</li>
                </ol>
            </div>
            <NavbarDetail />
        </>
    );
}
