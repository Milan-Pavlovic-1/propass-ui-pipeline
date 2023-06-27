import React, { useState } from 'react';
import {TabList , TabItem} from './styles'
const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <TabList>
        {tabs.map((tab, index) => (
          <TabItem
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </TabItem>
        ))}
      </TabList>
      <div className="tab-content">
        {tabs[activeTab].component}
      </div>
    </div>
  );
};

export default Tabs;
