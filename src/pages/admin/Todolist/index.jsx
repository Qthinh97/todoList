import * as S from "./styles";
import React, { Fragment } from "react";
import { Form, Card, Input, Button } from "antd";
import Update from "./update";
import { useDispatch, useSelector } from "react-redux";
import { createToDoListAction } from "../../../redux/action";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [addForm] = Form.useForm();
  const { todoList } = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const { Search } = Input;

  const renderFormData = () => {
    return todoList.map((item) => {
      return (
        <Fragment key={item.id}>
          <Update id={item.id} title={item.title} content={item.content} />
        </Fragment>
      );
    });
  };

  return (
    <div>
      <Card>
        <Form
          name="todolist"
          form={addForm}
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 22 }}
          onFinish={(values) => {
            dispatch(createToDoListAction(values));
            addForm.resetFields();
          }}
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
      <Search
        placeholder="input search text"
        style={{
          width: "100%",
          font: "24px",
        }}
        // onSearch={ }
        enterButton
      />
      <div>{renderFormData()}</div>
    </div>
  );
}

export default TodoList;
