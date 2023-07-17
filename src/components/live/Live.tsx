import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';

export default function Live() {
    const [loading, setLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState<string | null>(null);  

    const handleButtonClick = () => {
        setLoading(true);
        const apiEndpoint = 'https://jakeoliverlee-githubgraphs.nw.r.appspot.com/v1/commit-graph?username=jakeoliverlee&repo=new_website&theme=rainbow';
        const img = new Image();
        img.src = apiEndpoint;
        img.onload = () => {
            setApiResponse(apiEndpoint);
            setLoading(false);
        };
        img.onerror = () => {
            setLoading(false);
        };
    };

    return (
        <div className="api-response-section">
            <Button variant="outlined" onClick={handleButtonClick} style={{color: 'white'}}>Click here for a live demo!</Button>
            {loading ? <CircularProgress /> : apiResponse && <img src={apiResponse} alt="API response" style={{borderRadius: '10px', margin: '10px', maxWidth: '100%', height: 'auto'}} />}
        </div>
    );  
}
