import Head from 'next/head';
import styles from '../../styles/Table.module.css';

type Data = {
    date: string,
    value: Number,
    status: string
}

export async function getServerSideProps() {

    const res = await fetch("https://www.econdb.com/api/series/CPIUS/?format=json");
    const { data } = await res.json();

    const formattedData = [];

    for (let i = 0; i < data.dates.length; i++) {

        formattedData.push({
            date: data.dates[i],
            value: data.values[i],
            status: data.status[i]
        });

    }

    return {
        props: { data: formattedData }
    }

}

const Table = ({ data }: { data : Data[] } ) => {

    return (
        <>
            <Head>
                <title>Selenium Practice - Table</title>
            </Head>

            <div>
                <h1>Table</h1>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>CPI</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice(0).reverse().map(e=>(
                            <tr key={e.date}>
                                <td>{e.date}</td>
                                <td>{e.value.toString()}</td>
                                <td>{e.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );

}

export default Table;