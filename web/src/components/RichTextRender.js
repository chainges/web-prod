import React from 'react'
import BlockContent from '@sanity/block-content-to-react';
import './RichTextRender.css'


function RichTextRender(props) {
    return (
        <div class="bg-white border-b py-8 text-black">
            <div class="container max-w-5xl mx-auto m-8 rich-text-container">
                <BlockContent blocks={props.content} />
            </div>
        </div>
    )
}

export default RichTextRender
