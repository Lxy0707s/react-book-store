import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

export default () => (
    <Result
        status="403"
        title="403"
        subTitle="抱歉，你无权访问该页面！"
        extra={
            <Link to="/">
                <Button type="primary">返回首页</Button>
            </Link>
        }
    />
);