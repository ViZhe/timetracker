
import { Button, Card, Layout, message, Modal, Popconfirm, Table, Tag } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreateTimeEntryForm from '../../components/CreateTimeEntryForm';
import { RootState } from '../../store';
import { timesActions, timesSelectors } from '../../store/times';
import { ITimesData, ITimesState } from '../../store/times/models';
import styles from './index.module.css';


interface ITimeProps {
  times: ITimesState;
  addTimeEntry: (data: ITimesData) => void;
  removeTimeEntry: (data: string[]) => void;
}

interface ITimeState {
  isVisibleModal: boolean;
  loading: boolean;
  selectedKeys: any[];
}


const { Content } = Layout;

const mapStateToProps = (state: RootState) => ({
  times: timesSelectors.getTimes(state.times),
});
const mapDispatchToProps = {
  addTimeEntry: timesActions.add,
  removeTimeEntry: timesActions.remove,
};

const renderTags = (tags: [string]) => (
  tags.map(tag => (
    <Tag key={tag}>{tag.toUpperCase()}</Tag>
  ))
);
const renderTime = (text: string, record: ITimesData) => {
  const startTime = moment(record.timeStart).format('H:mm');
  const timeEnd = moment(record.timeEnd).format('H:mm');

  return `${startTime} - ${timeEnd}`;
};
const renderDuration = (text: string) => `${text} h`;

class Time extends Component<ITimeProps, ITimeState> {
  readonly state:ITimeState = {
    isVisibleModal: false,
    loading: false,
    selectedKeys: [],
  };

  onSelectChange = (selectedRowKeys: any) => {
    this.setState({ selectedKeys: selectedRowKeys });
  }

  onClickRemove = () => {
    this.props.removeTimeEntry(this.state.selectedKeys);
    this.setState({ selectedKeys: [] });
    message.success('Removed');
  }

  showModal = () => {
    this.setState({ isVisibleModal: true });
  }

  hideModal = () => {
    this.setState({ isVisibleModal: false });
  }

  render() {
    const { times } = this.props;
    const { selectedKeys } = this.state;
    const rowSelection = {
      onChange: this.onSelectChange,
      selectedRowKeys: selectedKeys,
    };

    return (
      <Content className={styles.wrapper}>
        <Card bordered={false}>
          <div className={styles.tableListOperator}>
            {selectedKeys.length === 0 && (
              <Button icon="plus" type="primary" onClick={this.showModal}>Add time entry</Button>
            ) || (
              <>
                <span
                  className={styles.tableListOperatorText}
                >
                  <b>{selectedKeys.length}</b>
                  <> time {selectedKeys.length > 1 ? 'entries' : 'entry'} selected</>
                </span>
                <Button disabled={true}>Explode World</Button>
                <Popconfirm
                  placement="bottom"
                  title="Are you sure delete selected entries?"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={this.onClickRemove}
                >
                  <Button type="danger" icon="delete">Delete </Button>
                </Popconfirm>
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
              title="Range"
              className={styles.columnTime}
              width={130}
              render={renderTime}
            />
            <Table.Column
              key="duration"
              dataIndex="duration"
              title="Time"
              className={styles.columnDuration}
              width={120}
              render={renderDuration}
            />
          </Table>
        </Card>
        <Modal
          title="Create a new time entry"
          visible={this.state.isVisibleModal}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          footer={null}
        >
          <CreateTimeEntryForm
            hideModal={this.hideModal}
          />
        </Modal>
      </Content>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Time);
