import { useState, useCallback } from 'react';

export default (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value), []);
    return [value, onChange] as const;
}
