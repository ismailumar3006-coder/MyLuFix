import React from 'react';
import Head from 'next/head';

const Dashboard = () => {
    return (
        <div>
            <Head>
                <title>MyLuFix VAI | Dashboard</title>
            </Head>
            <main className="min-h-screen bg-white">
                <header className="p-6 bg-blue-500 text-white">
                    <h1 className="text-xl font-bold">Dashboard</h1>
                </header>
                <section className="p-6">
                    <p>Welcome to your dashboard! Start creating videos using our AI features.</p>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;