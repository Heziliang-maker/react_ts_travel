import React from "react";
import { Button } from "antd";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addShoppingCart } from "../../redux/shopppingcart/slice";
import { useSelector } from "../../redux/hooks";
interface MatchParams {
  touristId: string;
}

export const ProductDetail: React.FC = () => {
  const { touristId } = useParams<MatchParams>();
  const dispatch = useDispatch();
  const history = useHistory();
  const shoppingCartItems = useSelector((s) => s.shoppingCart.items);
  // console.log("touristId=>", touristId);
  return (
    <div>
      <Button
        onClick={() => {
          history.goBack();
        }}
      >
        返回
      </Button>
      <p>商品详情</p>

      <Button
        onClick={() =>
          dispatch(addShoppingCart({ id: touristId, name: "最佳新品" }))
        }
      >
        添加购物车
      </Button>
      <ul>
        {shoppingCartItems.map((item) => (
          <li>
            <span>id:{item.id}</span>
            <span>name:{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
