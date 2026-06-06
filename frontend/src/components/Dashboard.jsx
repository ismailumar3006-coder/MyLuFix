import React, { useState } from 'react';

const Dashboard = () => {
    const [script, setScript] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerate = () => {
        setLoading(true);
        // Mock generation process
        setTimeout(() => setLoading(false), 10000);
    };

    return (
        <div className="dashboard p-6">
            <h1 className="text-3xl font-bold">AI Video Generator</h1>
            <textarea
                className="w-full p-2 border mt-4"
                rows={5}
                placeholder="Write your script here..."
                maxLength={500}
                value={script}
                onChange={(e) => setScript(e.target.value)}
            ></textarea>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                onClick={handleGenerate}
                disabled={loading}
            >
                {loading ? 'Generating...' : 'Generate Video'}
            </button>
        </div>
    );
};

export default Dashboard;