import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  Layout,
  Space,
} from 'antd';
import Header from '../../child_components/Header/Header';
import { Content } from 'antd/lib/layout/layout';
import LANGUAGES from "../../../constants/languages.json";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const CreateConfiguration = () => {
  const onFormLayoutChange = (data: any) => {
    console.log(data);
  };

  return (
    <Layout>
      <Header 
        subTitle='Create New Configuration'
      />
      <Content>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onValuesChange={onFormLayoutChange}
        >
          <Form.Item label="Configuration Name">
            <Input />
          </Form.Item>
          <Form.Item label="Project Name">
            <Input />
          </Form.Item>
          <Form.Item label="Keywords">
            <Input />
          </Form.Item>
          <Form.Item label="File Names">
            <Input />
          </Form.Item>
          <Form.Item name="languages" label="Languages">
            <Select mode="multiple">
              {
                LANGUAGES.map(item => <Select.Option key={item.key} value={item.key}>{item.title}</Select.Option>)
              }
            </Select>
          </Form.Item>
          <Form.Item label="Notification Email">
            <Input />
          </Form.Item>
          <Form.Item label="Code Watch Frequency">
            <Select>
              <Select.Option value="15">Every Hour</Select.Option>
              <Select.Option value="javascript">Daily</Select.Option>
              <Select.Option value="c">Once Weekly</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="" colon={false} style={{ marginBottom: 0 }} >
            <Form.Item label="" valuePropName="checked" style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
              <Checkbox>Run Now</Checkbox>
            </Form.Item>
            <Button type='primary' htmlType='submit' style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
              Create
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default CreateConfiguration;