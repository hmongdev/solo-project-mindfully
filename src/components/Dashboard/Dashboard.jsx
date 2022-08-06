import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Navbar/Navbar.css';
import '../Dashboard/Dashboard.css';
import Navbar from '../Navbar/Navbar';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
    const historyList = useSelector((store) => store.historyList);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'FETCH_HISTORY',
        });
    }, [dispatch]);

    const handleHistoryDetail = (id) => {
        dispatch({
            type: 'FETCH_DETAIL',
            payload: id,
        });
        history.push(`/detail/${id}`);
    };

    return (
        <div>
            <p className="view-title">Dashboard</p>
            <table className="main-container">
                <tbody>
                    {historyList.map((detail) => {
                        return (
                            <>
                                {/* <tr className="date">{detail.date}</tr> */}
                                <tr
                                    key={detail.id}
                                    onClick={() =>
                                        handleHistoryDetail(detail.id)
                                    }
                                >
                                    <td className="emoji">{detail.feeling}</td>
                                    <td className="reflection">
                                        {detail.reflection}
                                    </td>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </table>
            <Navbar />
        </div>
    );
}
