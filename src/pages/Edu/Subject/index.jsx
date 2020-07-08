import React, { Component } from "react";
import { Button, Table } from 'antd';
import { PlusOutlined, DeleteOutlined, FormOutlined } from '@ant-design/icons';
import './index.css'
const columns = [
  { title: '分类名称', dataIndex: 'name', key: 'name' },
  {
    title: '操作',
    dataIndex: '',
    key: 'x',
    width: 200,
    render: () => <>
      <Button type="primary" className="primary-btn"><FormOutlined /></Button>
      <Button type="danger"><DeleteOutlined /></Button>
    </>,
  },
];
const data = [
  {
    key: 1,
    name: 'SPIDER-MAN',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'IRON-MAN',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'THOR',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'HULK',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];
export default class Subject extends Component {
  render() {
    return <div className='subject'>
      <Button type="primary" className="primary-button"><PlusOutlined />新建</Button>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
          rowExpandable: record => record = true,
        }}
        dataSource={data}
      />,
    </div>
  }
}
