import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

const DynamicApp = React.lazy(() => import('./components/App/index'));

ReactDOM.render((
    <Suspense fallback={<div>loading..</div>}>
        <DynamicApp />
    </Suspense>
), document.getElementById('app'));
