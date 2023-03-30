import * as S from "./styles";
import React, { Fragment } from "react";
import { Form, Card, Input, Button } from "antd";
import Update from "./update";
import { useDispatch, useSelector } from "react-redux";
import {
  createToDoListAction,
  updateToDoListAction,
  deleteToDoListAction,
} from "../../../redux/action";
import { v4 as uuidv4 } from "uuid";

function TodoList(props) {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.list);

  const renderFormData = () => {
    return todoList.map((item) => {
      return (
        <Fragment key={item.id}>
          <Update
            id={item.id}
            title={item.title}
            content={item.content}
            handleUpdateData={handleUpdateData}
            handleDeleteData={handleDeleteData}
          />
        </Fragment>
      );
    });
  };

  const handleAddItem = (values) => {
    dispatch(
      createToDoListAction({
        id: uuidv4(),
        title: values.title,
        content: values.content,
      })
    );
  };

  const handleUpdateData = (values, id) => {
    const index = todoList.findIndex((item) => item.id === id);
    const newToDoList = [...todoList];
    newToDoList.splice(index, 1, values);
    dispatch(updateToDoListAction(newToDoList));
  };

  const handleDeleteData = (id) => {
    const index = todoList.findIndex((item) => item.id === id);
    const newToDoList = [...todoList];
    newToDoList.splice(index, 1);
    dispatch(deleteToDoListAction(newToDoList));
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
