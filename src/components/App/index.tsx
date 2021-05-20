import React, { Suspense, useState } from 'react';

const DynamicTodoList = React.lazy(() => import('../TodoList/index'));

export default () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <h2 onClick={() => setOpen(!open)}>GRINCH TO DO LIST</h2>
            {open && (
                <Suspense fallback={() => <div>loading</div>}>
                    <DynamicTodoList />
                </Suspense>
            )}
        </div>
    );
};
