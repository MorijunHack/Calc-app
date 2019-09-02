import Layout from '../components/Layout';
import Link from 'next/link';
import Calc from '../components/Calc';

export default () => (
    <Layout header="Memo and Calculation" title="Calc">
        <p>input your data!</p>
        <hr />
        <Calc />
        <hr />
        <Link href="/">
            <button>Go to Index page</button>
        </Link>
    </Layout> 
);