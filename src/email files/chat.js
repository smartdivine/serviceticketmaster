import React, { useEffect, useState } from 'react';

const ChatWidget = () => {
    const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);

    useEffect(() => {
        // Tidio script URL
        const tidioScriptUrl = 'https://code.tidio.co/6ngaghozvxwrdnc5ifk1ti9kuc2lqwoc.js';

        const loadTidioScript = () => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = tidioScriptUrl;
                script.async = true;

                script.onload = () => {
                    console.log('Tidio script loaded');
                    setIsWidgetLoaded(true);
                    resolve();
                };

                script.onerror = () => {
                    console.error('Error loading Tidio script');
                    reject(new Error('Error loading Tidio script'));
                };

                document.body.appendChild(script);
            });
        };

        loadTidioScript();

        return () => {
            const script = document.querySelector(`script[src="${tidioScriptUrl}"]`);
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, []);

    if (!isWidgetLoaded) {
        return <div>Loading chat...</div>;
    }

    return (
        <div id="tidio-chat-widget">
            {/* The Tidio widget will be injected here */}
        </div>
    );
};

export default ChatWidget;
