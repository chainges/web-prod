import React from 'react'
import BlockContent from '@sanity/block-content-to-react';


function RichTextRender(props) {
    console.log("in rich text", props)
    return (
        <div class="container mx-auto px-8">
            <BlockContent blocks={props.content} />
            Hello in rich text.
        </div>
    )
}

export default RichTextRender
