import React, {useState, useRef, useEffect} from 'react'

function Paper() {
    
    const [height, setHeight] = useState(600);
    const iframeRef = useRef(null);
    
    const handleResize = () => {
        const contentHeight = iframeRef.current.contentWindow.document.body.scrollHeight;
        if (contentHeight + 50 > height)
            setHeight(contentHeight + 50);
    }

    useEffect(() => {
        let resizeInterval = setInterval(() => {
            handleResize();
        }, 200);
        
        return () => {
            clearInterval(resizeInterval);
        }
    })
    return (
        <div style={{height: `${height}px`, width: '100%'}}>
            <iframe
                src='/widget.html'
                id='paperFrame'
                ref={iframeRef}
                onLoad={() => {
                    iframeRef.current.contentWindow.addEventListener('resize', handleResize);
                    handleResize();
                }} 
                style={{width: '100%', height: '100%'}}
            ></iframe>
        </div>
    )
}

export default Paper
