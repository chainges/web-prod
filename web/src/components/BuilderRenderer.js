import React, { useEffect, useState } from 'react'
import axios from 'axios';

function BuilderRenderer(props) {
    const [data, setData] = useState('');

    const getPage = async () => {
        let MODEL_NAME = props.modelName;
        const API_KEY = props.apiKey;
        const PAGE_URL = props.url;

        MODEL_NAME = MODEL_NAME.toLowerCase()
        MODEL_NAME = MODEL_NAME.replace(/ /g,"-");

        const url = `https://builder.io/api/v1/html/${MODEL_NAME}?url=${encodeURIComponent(PAGE_URL)}&apiKey=${API_KEY}`;
        console.log(props);
        console.log(url);
        try {
            const res = await axios.get(url);
            setData(res.data.data.html);
        } catch (err) {
            console.log("Something went wrong during fecthing builder component");
        }
    }
    useEffect(() => {
        getPage();
    }, [])

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: data }} />
        </div>
    )
}

export default BuilderRenderer
