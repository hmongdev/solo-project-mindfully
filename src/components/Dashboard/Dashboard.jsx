import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Dashboard.css';
import '../Navbar/Navbar.css';
import Navbar from '../Navbar/Navbar';
import HistoryDetail from '../HistoryDetail/HistoryDetail';

export default function Dashboard() {
    const historyList = useSelector((store) => store.historyList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_HISTORY',
        });
    }, []);

    return (
        <div>
            <p className="view-title">Dashboard</p>
            <table className="container">
                <thead>
                    {/* <tr>
                        <th>Emoji</th>
                        <th>Reflection</th>
                    </tr> */}
                </thead>
                <tbody>
                    {historyList.map((detail, i) => {
                        return <HistoryDetail key={i} detail={detail} />;
                    })}
                </tbody>
            </table>
            <Navbar />
        </div>
    );
}
