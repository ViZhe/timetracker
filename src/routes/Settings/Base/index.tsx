
import React, { Component } from 'react';
import {
  Form, Input, Tooltip, Icon, Button, message,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form';

import styles from './index.module.css';


type Props = {};
type State = {};

class Base extends Component<Props & FormComponentProps, State> {
  readonly state: State = {};

  handleSubmit = (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        message.success('Success');
        return;
      }
      message.error('Error');
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Base Settings</h1>
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <Form.Item
            label={(
              <span>
                Name&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
          >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Update</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}


export default Form.create<FormComponentProps>({
  name: 'register',
})(Base);
