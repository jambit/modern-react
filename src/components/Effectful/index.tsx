import React, { useEffect, useState } from 'react';

export default () => {
    const [originalTitle] = useState(document.title);
    useEffect(() => {
        document.title = 'Effectful React';
        return () => document.title = originalTitle;
    }, []);
    return <span>Woot</span>;
}
