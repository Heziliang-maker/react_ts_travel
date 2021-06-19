import React from "react";
import styles from "./HomePage.module.css";
import { Row, Col, Typography, Divider } from "antd";
import {
  SideMenu,
  Carousel,
  ProductSelection,
  Header,
  Footer,
} from "../../components";

import sideImage1 from "../../assets/sideImage1.png";
import sideImage2 from "../../assets/sideImage2.png";
import sideImage3 from "../../assets/sideImage3.png";

import { productList1, productList2, productList3 } from "./mockups";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
const companies = [logo1, logo2, logo3];

export class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles["page-content"]}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu />
            </Col>
            <Col span={18}>
              <Carousel />
            </Col>
          </Row>
          {/* 爆款推荐 */}
          <ProductSelection
            title={
              <Typography.Title level={3} type="warning">
                爆款推荐
              </Typography.Title>
            }
            sideImage={sideImage1}
            products={productList1}
          ></ProductSelection>
          {/* 新品上市 */}
          <ProductSelection
            title={
              <Typography.Title level={3} type="danger">
                新品上市
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList2}
          ></ProductSelection>
          {/* 新品上市 */}
          <ProductSelection
            title={
              <Typography.Title level={3} type="success">
                国内游推荐
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList3}
          ></ProductSelection>
          <Divider orientation="left">
            <Typography.Title level={3}>合作企业</Typography.Title>
          </Divider>
          <Row>
            {companies.map((item, index) => (
              <Col span={6} key={`business-partner-${index}`}>
                <img
                  src={item}
                  alt="business-partner"
                  style={{
                    width: "80%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </Col>
            ))}
          </Row>
        </div>
        <Footer />
      </>
    );
  }
}
