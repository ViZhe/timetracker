
import { Button, Form, Input, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../store';
import { timesActions } from '../../store/times';
import { ITimesData } from '../../store/times/models';

import Chance from 'chance';
const chance = new Chance();

interface IProps extends FormComponentProps {
  hideModal: () => void;
  addTimeEntry: (data: ITimesData) => void;
}


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

  return (
    <Form layout="vertical" onSubmit={handleSubmit}>
      <Form.Item label="Description">
        {getFieldDecorator('description', {
          rules: [{ required: true, message: 'Please input the description of collection!' }],
        })(
          <Input />,
        )}
      </Form.Item>
      <Form.Item label="Duration">
        {getFieldDecorator('duration', {
          rules: [{ required: true, message: 'Please input the duration of collection!' }],
        })(
          <Input />,
        )}
      </Form.Item>
      <Form.Item label="TimeStart">
        {getFieldDecorator('timeStart', {
          rules: [{ required: true, message: 'Please input the timeStart of collection!' }],
        })(
          <Input />,
        )}
      </Form.Item>
      <Form.Item label="TimeEnd">
        {getFieldDecorator('timeEnd', {
          rules: [{ required: true, message: 'Please input the timeEnd of collection!' }],
        })(
          <Input />,
        )}
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
