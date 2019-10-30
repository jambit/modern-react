import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef<HTMLDivElement>();
    useEffect(() => {
        ref.current.textContent = 'Gotcha';
    }, []);
    return <div>
        Ref: <span ref={ref} />
    </div>
}
