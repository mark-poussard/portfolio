import React, { useState } from 'react';
import Index from './view/v1/screen/index/Index';
import { Page } from './view/v1/screen/Page';
import Portfolio from './view/v1/screen/portfolio/Portfolio';

const App : React.FunctionComponent = props => {
    const [page, setPage] = useState(Page.INDEX);
    return (
        <div className={`App`}>
            <Index active={page === Page.INDEX} setPage={setPage} />
            <Portfolio active={page === Page.PORTFOLIO} setPage={setPage} />
        </div>
    )
}
export default App;
