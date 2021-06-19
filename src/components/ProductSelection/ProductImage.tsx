import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Image, Typography } from "antd";

// 利用react-router的高阶函数 使得ProductImage组件获得路由
// 继承location等类型约束
interface PropsType extends RouteComponentProps {
  id: string | number;
  title: string;
  price: number | string;
  imageSrc: string;
  size: string;
}
const ProductImageComponent: React.FC<PropsType> = ({
  id,
  title,
  price,
  imageSrc,
  size,
  history,
  location,
  match,
}) => {
  // console.log("aa=>", history, match, location);
  return (
    <div
      onClick={() => {
        history.push("/detail/" + id);
      }}
    >
      {size === "large" ? (
        <Image src={imageSrc} height={285} width={490} />
      ) : (
        <Image src={imageSrc} height={120} width={240} />
      )}
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger" strong>
          ¥{price}起
        </Typography.Text>
      </div>
    </div>
  );
};

export const ProductImage = withRouter(ProductImageComponent);
