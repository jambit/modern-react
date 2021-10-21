import { useState, useCallback } from 'react';

export default (initialValue: boolean) => {
    const [value, setValue] = useState(initialValue);
    const toggle = useCallback(() => setValue((lastValue) => !lastValue), []);
    return [value, toggle] as const;
};
