import styles from '../UI/dashboard/dashboard.module.css'
import Card from "../UI/dashboard/card/card";
import Rightbar from '../UI/dashboard/rightbar/rightbar';
import Transactions from '../UI/dashboard/transactions/transactions';
import Chart from '../UI/dashboard/chart/chart';

const DashboardPage = () => {
    return(
        <div className={styles.warpper}>
            
            <div className={styles.main}>
                <div className={styles.card}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transactions />
                <Chart />
            </div>      

            <div>

                <div className={styles.side}>
                    <Rightbar />
                </div>
            </div>
            
        </div>
    )
}

export default DashboardPage;