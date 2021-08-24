import React, {useState, useCallback} from 'react'
import './Tabs.scss';

function Tabs({children}) {
    const [activeTab, setactiveTab] = useState(children[0].props.label)
    const handleActiveTab = useCallback(label => setactiveTab(label), []);

    const tabs = children.map(child => (
        <button
            onClick={e => {
                e.preventDefault();
                handleActiveTab(child.props.label)
            }}
            className={
                child.props.label === activeTab
                    ? ["tabs__tab", "tabs__tab-active"].join(" ")
                    : "tabs__tab"
            }
            key={child.props.label}
        >
            {child.props.tabName}
        </button>
    ));
    const tabContent = children.filter(child => child.props.label === activeTab);
    return (
        <div>
            <div className="tabs__box">
                <div className="container">
                    {tabs}
                </div>
            </div>
            <div className="container">{tabContent}</div>
       </div>
    )
}

function Tab(props) {
    return <>{props.children}</>
}

export  {Tabs, Tab}
