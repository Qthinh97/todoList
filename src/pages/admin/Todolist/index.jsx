import * as S from "./styles";
import React from "react";
import { Form, Card, Input, Button } from "antd";
import Update from "./update";

function TodoList(props) {
  const { listItem, handleAddItem, handleUpdateData, handleDeleteData } = props;
  const renderFormData = () => {
    return listItem.map((item) => {
      return (
        <Update
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          handleUpdateData={handleUpdateData}
          handleDeleteData={handleDeleteData}
        />
      );
    });
  };

  return (
    <div>
      <Card>
        <Form
          name="todolist"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 22 }}
          onFinish={(values) => handleAddItem(values)}
        >
          <Form.Item
            label="Title"
            name="title"
            validateFirst
            rules={[
              {
                required: true,
                message: "Title là Bắt buộc",
              },
              {
                pattern: /([A-Z])\w+/g,
                message: " Phải viết hoa ký tự đầu tiên",
              },
              {
                min: 3,
                type: "string",
                message: "Title phải dài hơn 3 ký tự",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            validateFirst
            rules={[
              {
                required: true,
                message: "Title là Bắt buộc",
              },
              {
                max: 20,
                type: "string",
                message: "Content dài tối đa 20 ký tự",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form>
      </Card>
      <div>{renderFormData()}</div>
    </div>
  );
}

export default TodoList;
