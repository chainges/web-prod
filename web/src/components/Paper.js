import React, {useState, useRef, useEffect} from 'react'

function Paper() {
    
    const [height, setHeight] = useState(600);
    const iframeRef = useRef(null);
    
    const handleResize = () => {
        if (iframeRef.current.contentWindow.document.body) {
            const contentHeight = iframeRef.current.contentWindow.document.body.scrollHeight + 100;
            if (contentHeight > height)
                setHeight(contentHeight);
        }
    }

    useEffect(() => {
        const resizeInterval = setInterval(() => {
            handleResize();
        }, 200);
        return () => {
            clearInterval(resizeInterval);
        }
    }, [])
    return (
        <div style={{height: `${height}px`, width: '100%', backgroundColor: 'white', padding:'2em'}}>
            <iframe
                src='/widget.html'
                id='paperFrame'
                ref={iframeRef}
                onLoad={() => {
                    handleResize();
                }} 
                style={{width: '100%', height: '100%'}}
            ></iframe>
        </div>
    )
}

export default Paper
