import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './BuilderRenderer.css';
import { BuilderComponent, builder } from '@builder.io/react';

function BuilderRenderer(props) {
    const [data, setData] = useState('');
    const [content, setContent] = useState('')
    const getPage = async () => {
        let MODEL_NAME = props.modelName;
        const API_KEY = props.apiKey;
        MODEL_NAME = MODEL_NAME.toLowerCase()
        MODEL_NAME = MODEL_NAME.replace(/ /g,"-");

        const url = props.url;
        try {
            builder.init(API_KEY);
            builder.get('page', { url: url }).promise().then(setContent);
        } catch (err) {
            console.log("Something went wrong during fecthing builder component");
        }
    }
    useEffect(() => {
        getPage();
    }, [])

    return (
        <div className="builder-renderer">
            <div>
                <BuilderComponent model="page" content={content} />
            </div>
        </div>
    )
}

export default BuilderRenderer
