import Layout from '../components/Layout';
import Link from 'next/link';
import Calc from '../components/Calc';

export default () => (
    <Layout header="Memo and Calculation" title="Review">
        <div className="container">
            <p>manage your schedule!</p>
            <hr />
            <Calc />
            <Link href="/">
                <button>Go to Index page</button>
            </Link>
        </div>
    </Layout> 
);