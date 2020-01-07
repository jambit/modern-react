import React, { useEffect, useState, PropsWithChildren } from 'react';
import { DynamicModuleLoader, IModule } from 'redux-dynamic-modules';

interface LazyDynamicModuleLoaderProps {
    imports: Array<() => Promise<{ default: () => IModule<any> }>>;
    loading: JSX.Element;
}

export default ({ imports, children, loading }: PropsWithChildren<LazyDynamicModuleLoaderProps>) => {
    const [modules, setValue] = useState<Array<IModule<any>> | null>(null);
    useEffect(() => {
        Promise
            .all(imports.map((get) => get()))
            .then((result) => setValue(result.map((r) => r.default())));
            // fixme: catch?
    }, []);
    if (!modules) {
        return loading;
    }
    return <DynamicModuleLoader modules={modules}>{children}</DynamicModuleLoader>;
};
