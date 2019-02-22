
import { Button, Card, Layout, Table, Tag } from 'antd';
import React, { Component } from 'react';

import styles from './index.module.css';


interface ITimeProps {
}

interface ITimeState {
  loading: boolean;
  selectedKeys: any[];
}


const renderTags = (tags: [string]) => (
  tags.map(tag => (
    <Tag key={tag}>{tag.toUpperCase()}</Tag>
  ))
);

const columns = [{
  dataIndex: 'description',
  title: 'Description',
}, {
  dataIndex: 'tags',
  render: renderTags,
  title: 'Tags',
}, {
  className: styles.columnTime,
  dataIndex: 'time',
  width: 130,
}, {
  className: styles.columnDuration,
  dataIndex: 'duration',
  width: 120,
}];

const data: any = [];
for (let i = 0; i < 46; i++) {
  data.push({
    description: `London, Park Lane no. ${i}`,
    duration: `2h ${String(59 - i).padStart(2, '0')} min`,
    key: i,
    tags: ['generated', `tag${i}`],
    time: `20:${String(i).padStart(2, '0')} - 22:40`,
  });
}

const { Content } = Layout;

class Time extends Component<ITimeProps, ITimeState> {
  readonly state:ITimeState = {
    loading: false,
    selectedKeys: [],
  };

  render() {
    const { selectedKeys } = this.state;
    const rowSelection = {
      getCheckboxProps: (record: any) => ({
        disabled: record.disabled, // Column configuration not to be checked
      }),
      onChange: (selectedRowKeys: any) => {
        this.setState({ selectedKeys: selectedRowKeys });
      },
    };

    return (
      <>
      <Content className={styles.wrapper}>
        <Card bordered={false}>
          <div className={styles.tableListOperator}>
            {selectedKeys.length === 0 && (
              <Button icon="plus" type="primary">Add time entry</Button>
            ) || (
              <>
                <span
                  className={styles.tableListOperatorText}
                >
                  <b>{selectedKeys.length}</b> time entry selected
                </span>
                <Button disabled={true}>Explode World</Button>
                <Button type="danger" icon="delete">Delete </Button>
              </>
            )}
          </div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={false}
          />
        </Card>
      </Content>
      </>
    );
  }
}


export default Time;
