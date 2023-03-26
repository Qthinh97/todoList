import { useState } from "react";
import { Link, generatePath } from "react-router-dom";

import { Input, Row, Col, Card, Button } from "antd";
import { ROUTES } from "../../../constants/routes";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";

function HomePage({ isShowSidebar }) {
  const [searchValue, setSearchValue] = useState("");
  const [count, setCount] = useState(0);
  const [productList, setProductList] = useState([
    {
      name: "Iphone X",
      price: 15000000,
    },
    {
      name: "Iphone XS",
      price: 15000000,
    },
    {
      name: "Iphone 11",
      price: 15000000,
    },
    {
      name: "Iphone 13",
      price: 15000000,
    },
    {
      name: "Iphone 14",
      price: 20000000,
    },
    {
      name: "Iphone 14 pro",
      price: 25000000,
    },
  ]);

  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log("🚀 ~ HomePage ~ data:", data);

  const getProductList = () => {
    dispatch({
      type: "GET_PRODUCT_LIST",
      payload: [1, 2, 3],
    });
  };

  const [productListData, setProductListData] = useState({
    name: "",
    price: 0,
  });

  const handleProductData = (e, key) => {
    setProductListData({
      ...productListData,
      [key]: e.target.value,
    });
  };

  const [productError, setProductError] = useState({
    name: "",
    price: "",
  });

  const handleAddItem = () => {
    let isValid = true;
    const errors = {};
    if (!productListData.name) {
      errors.name = "name is required";
      isValid = false;
    } else {
      errors.name = "";
    }

    if (!productListData.price) {
      errors.price = "price is required";
      isValid = false;
    } else {
      errors.price = "";
    }

    if (isValid === true) {
      setProductList([
        ...productList,
        {
          name: productListData.name,
          price: productListData.price,
        },
      ]);

      setProductError([
        productError,
        {
          name: "",
          price: "",
        },
      ]);

      setProductListData({
        name: "",
        price: "",
      });
      setProductError(errors);
    }
  };

  // const list = ["A", "B", "C"];
  // const newList = () => {
  //   return list.map((item, index) => {
  //     return `${item}${index + 1}`;
  //   });
  // };
  // console.log("🚀 ~ newList ~ newList:", newList);

  const checkValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleReduce = () => {
    setCount(count - 1);
  };

  const buyProduct = (name) => {
    return console.log(`Buy ${name}`);
  };

  const renderProductList = () => {
    return productList.map((item, index) => {
      return (
        <Col key={index} sx={24} md={12} xl={8}>
          <Link to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: index })}>
            <Card title={item.name} size="small">
              <h3>Giá : {item.price}</h3>
              <Button onClick={() => buyProduct(item.name)}>Buy</Button>
            </Card>
          </Link>
        </Col>
      );
    });
  };

  // const checkValue = (e) => {
  //   return console.log(e.target.value);
  // };

  return (
    <S.HomeWrapper>
      <Input
        className="search about-content"
        type="text"
        onChange={(e) => checkValue(e)}
      />
      <h5>{searchValue}</h5>

      <Button onClick={handlePlus}>+</Button>
      <h3>{count}</h3>
      <Button onClick={handleReduce}>-</Button>

      <Row gutter={[16, 16]}>{renderProductList()}</Row>

      <Input
        type="text"
        onChange={(e) => handleProductData(e, "name")}
        placeholder="product name"
        value={productListData.name}
      />
      <span>{productError.name}</span>
      <Input
        type="text"
        onChange={(e) => handleProductData(e, "price")}
        placeholder="product price"
        value={productListData.price}
      />
      <span>{productError.price}</span>

      <Button onClick={() => handleAddItem()}>add product list</Button>
      <Button onClick={() => getProductList()}>Get product list</Button>
    </S.HomeWrapper>
  );
}

export default HomePage;
