import React, { useState } from "react";
import { Form, Input, Card, Button, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  updateToDoListAction,
  deleteToDoListAction,
} from "../../../redux/action";

function Update({ id, title, content }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateForm] = Form.useForm();
  const dispatch = useDispatch();

  const renderTodoListData = () => {
    if (!isUpdate) {
      return (
        <Card size="small" style={{ marginTop: "16px" }}>
          <h3>Title: {title}</h3>
          <h4>Content: {content}</h4>
        </Card>
      );
    }
    return (
      <Form
        form={updateForm}
        layout="vertical"
        initialValues={{
          title: title,
          content: content,
        }}
        onFinish={(values) => {
          dispatch(updateToDoListAction({ id, values }));
          setIsUpdate(false);
        }}
      >
        <Form.Item
          label="Title"
          layout="vertical"
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
          layout="vertical"
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
      </Form>
    );
  };

  return (
    <Card>
      {renderTodoListData()}
      <Space>
        {isUpdate ? (
          <>
            <Button type="primary" onClick={() => updateForm.submit()}>
              Save
            </Button>
            <Button onClick={() => setIsUpdate(false)}>Cancel</Button>
          </>
        ) : (
          <Button type="primary" onClick={() => setIsUpdate(true)}>
            Update
          </Button>
        )}
        <Button danger onClick={() => dispatch(deleteToDoListAction({ id }))}>
          Delete
        </Button>
        <Button danger onClick={() => dispatch(deleteToDoListAction({ id }))}>
          Delete
        </Button>
        <Button danger onClick={() => dispatch(deleteToDoListAction({ id }))}>
          Delete
        </Button>
      </Space>
    </Card>
  );
}
export default Update;
