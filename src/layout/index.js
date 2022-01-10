import React, { useState } from 'react'
import { Tabs } from 'antd';

import User from '../components/users'

const { TabPane } = Tabs;
function Layout() {
    const [keyTab, setKeyTab] = useState("1");
    function callback(key) {
        setKeyTab(key);
    }

    const tabs = [
        {
            id: "1",
            components: <User />,
            title: 'User'
        },
        {
            id: "2",
            components: 'Post',
            title: 'Post'
        },
    ]
    return (
        <Tabs defaultActiveKey={keyTab} onChange={callback}>
            {
                tabs.map((item, index) => (
                    <TabPane tab={item.title} key={item.id}>
                        {item.components}
                    </TabPane>
                ))
            }
        </Tabs>
    )
}

export default Layout;