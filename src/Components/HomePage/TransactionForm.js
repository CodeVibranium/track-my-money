import React from "react";
import { Button, Form, InputNumber, Select, Card, Input } from "antd";
const { Option } = Select;
const { TextArea } = Input;
const Transactionform = () => {
  return (
    <Card title="Transaction Information">
      <Form layout="vertical">
        <Form.Item label="Type" key="Type" className="font-bold">
          <Select placeholder="Enter transaction type ">
            <Option key="credit">Credit</Option>
            <Option key="debit">Debit</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Amount" key="Amount" className="font-bold">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Description" key="Description" className="font-bold">
          <TextArea
            placeholder="A few words to describe transaction"
            rows={4}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Add Transaction</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Transactionform;
