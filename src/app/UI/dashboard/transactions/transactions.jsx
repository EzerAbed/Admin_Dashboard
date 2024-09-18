import Image from 'next/image';
import styles from './transaction.module.css'

const Transactions = () => {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Image src="/images.png" alt='' width={40} height={40} className={styles.userImage}/>
                            John Week
                        </td>
                        <td className={`${styles.status} ${styles.pending}`}> Pending </td>
                        <td> 12.05.2002</td>
                        <td>300 DT</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions;