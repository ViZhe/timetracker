
import { Button, Card, Layout, Table, Tag } from 'antd';
import Chance from 'chance';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { timesActions, timesSelectors } from '../../features/times';
import { ITimesData, ITimesState } from '../../features/times/models';
import styles from './index.module.css';


interface ITimeProps {
  times: ITimesState;
  addTimeEntry: (data: ITimesData) => void;
}

interface ITimeState {
  loading: boolean;
  selectedKeys: any[];
}


const { Content } = Layout;

const chance = new Chance();

const mapStateToProps = (state: any) => ({
  times: timesSelectors.getTimes(state.times),
});

const mapDispatchToProps = {
  addTimeEntry: timesActions.add,
};

const renderTags = (tags: [string]) => (
  tags.map(tag => (
    <Tag key={tag}>{tag.toUpperCase()}</Tag>
  ))
);
const renderTime = (text: string, record: ITimesData) => (
  `${record.timeStart} - ${record.timeEnd}`
);

class Time extends Component<ITimeProps, ITimeState> {
  readonly state:ITimeState = {
    loading: false,
    selectedKeys: [],
  };

  componentDidMount() {
    for (let i = 0; i < 10; i++) {
      this.props.addTimeEntry({
        description: chance.sentence({ words: 5 }),
        duration: `${chance.hour({ twentyfour: true })}h ${chance.minute()} min`,
        key: chance.guid(),
        tags: [chance.word(), `tag ${i}`],
        timeEnd: `${chance.hour()}:${chance.minute()}`,
        timeStart: `${chance.hour()}:${chance.minute()}`,
      });
    }
  }

  render() {
    const { times } = this.props;
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
                  <b>{selectedKeys.length}</b>
                  <> time {selectedKeys.length > 1 ? 'entries' : 'entry'} selected</>
                </span>
                <Button disabled={true}>Explode World</Button>
                <Button type="danger" icon="delete">Delete </Button>
              </>
            )}
          </div>
          <Table
            rowSelection={rowSelection}
            dataSource={times.data}
            pagination={false}
          >
            <Table.Column
              key="description"
              dataIndex="description"
              title="Description"
            />
            <Table.Column
              key="tags"
              dataIndex="tags"
              title="Tags"
              render={renderTags}
            />
            <Table.Column
              key="time"
              dataIndex="time"
              className={styles.columnTime}
              width={130}
              render={renderTime}
            />
            <Table.Column
              key="duration"
              dataIndex="duration"
              className={styles.columnDuration}
              width={120}
            />
          </Table>
        </Card>
      </Content>
      </>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Time);
