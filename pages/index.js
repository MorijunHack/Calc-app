import React, { Component } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default () => (
    <Layout header="Top Page" title="Calc">
        <h1>Calculation</h1>
        <hr />
        <Link href="/calc">
            <button>Go to Other page</button>
        </Link>
    </Layout> 
);