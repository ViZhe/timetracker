
import { Button, Form, Icon, Input, message, Tooltip } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userActions, userSelectors } from '../../../features/user';
import styles from './index.module.css';


interface IBaseProps extends FormComponentProps {
  setData: ({}: any) => void;
  user: {
    name: string | null;
  };
}


const mapStateToProps = (state: any) => ({
  user: userSelectors.getUser(state.user),
});

const mapDispatchToProps = () => ({
  setData: userActions.setData,
});

class Base extends Component<IBaseProps> {
  handleSubmit = (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        message.error('Error');
        return;
      }

      this.props.setData(values);
      message.success('Success');
    });
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

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
              <Input />,
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

const BaseForm = Form.create({
  mapPropsToFields(props: IBaseProps) {
    return {
      name: Form.createFormField({ value: props.user.name }),
    };
  },
  name: 'updateUserData',
})(Base);


export default connect(mapStateToProps, mapDispatchToProps())(BaseForm);
