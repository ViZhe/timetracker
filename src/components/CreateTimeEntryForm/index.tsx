
import { Button, Form, Input, message, TimePicker } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import Chance from 'chance';
import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../store';
import { timesActions } from '../../store/times';
import { ITimesData } from '../../store/times/models';
import styles from './index.module.css';


interface IProps extends FormComponentProps {
  hideModal: () => void;
  addTimeEntry: (data: ITimesData) => void;
}


const chance = new Chance();

const mapStateToProps = (state: RootState) => ({});
const mapDispatchToProps = {
  addTimeEntry: timesActions.add,
};

const CreateTimeEntry: React.FC<IProps> = ({ form, hideModal, addTimeEntry }) => {
  const { getFieldDecorator } = form;

  const handleSubmit = (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault();

    form.validateFields((err: any, values: any) => {
      if (err) {
        return;
      }

      addTimeEntry({
        key: chance.guid(),
        tags: [chance.word(), `tag ${chance.natural()}`],
        ...values,
      });
      hideModal();
      form.resetFields();
      message.success('Success');
    });
  };

  const onChangeTimeStart = (time: moment.Moment) => {
    let timeEnd = form.getFieldValue('timeEnd');

    if (!timeEnd || time.isSameOrAfter(timeEnd)) {
      timeEnd = moment(time).add(5, 'minutes');

      form.setFieldsValue({
        timeEnd,
      });
    }

    const duration = moment(timeEnd).diff(time, 'hours', true);
    form.setFieldsValue({
      duration: duration.toFixed(2),
    });
  };

  const onChangeTimeEnd = (time: moment.Moment) => {
    let timeStart = form.getFieldValue('timeStart');

    if (!timeStart || time.isSameOrBefore(timeStart)) {
      timeStart = moment(time).subtract(5, 'minutes');

      form.setFieldsValue({
        timeStart,
      });
    }

    const duration = moment(time).diff(timeStart, 'hours', true);
    form.setFieldsValue({
      duration: `${duration.toFixed(2)} h`,
    });
  };

  return (
    <Form layout="vertical" onSubmit={handleSubmit}>
      <Form.Item label="Description">
        {getFieldDecorator('description', {
          rules: [{ required: true, message: 'Please input the description of collection!' }],
        })(
          <Input autoFocus={true} />,
        )}
      </Form.Item>
      <Form.Item
        className={styles.timeRow}
      >
        <Form.Item label="TimeStart">
          {getFieldDecorator('timeStart', {
            rules: [{ required: true, message: 'Please input the timeStart of collection!' }],
          })(
            <TimePicker format="HH:mm" onChange={onChangeTimeStart} />,
          )}
        </Form.Item>
        <Form.Item label="TimeEnd">
          {getFieldDecorator('timeEnd', {
            rules: [{ required: true, message: 'Please input the timeEnd of collection!' }],
          })(
            <TimePicker format="HH:mm" onChange={onChangeTimeEnd} />,
          )}
        </Form.Item>
        <Form.Item label="Duration">
          {getFieldDecorator('duration', {
            rules: [{ required: true, message: 'Please input the duration of collection!' }],
          })(
            <Input />,
          )}
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">Create</Button>
      </Form.Item>
    </Form>
  );
};

const CreateTimeEntryForm = Form.create({
  name: 'createTimeEntry',
})(CreateTimeEntry);


export default connect(mapStateToProps, mapDispatchToProps)(CreateTimeEntryForm);