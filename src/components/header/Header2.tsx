// 函数式组件 --使用react-redux

import React from "react";

import logo from "../../logo.svg";
import styles from "./Header.module.css";
import { GlobalOutlined } from "@ant-design/icons";

import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";

import { useHistory } from "react-router-dom";

import { useSelector } from "../../redux/hooks";

import { useTranslation } from "react-i18next";

import { useDispatch } from "react-redux";

import {
  AddLanguageActionCreater,
  ChangeLanguageActionCreater,
} from "../../redux/language/LanguageActions";

export const Header: React.FC = () => {
  const history = useHistory();

  // 如何使RootState与组件剥离 自定义hook

  const language = useSelector((state) => state.language.language);
  // 分发函数
  const dispatch = useDispatch();
  const languageList = useSelector((state) => state.language.languageList);
  // 获得translation函数 t
  const { t } = useTranslation();

  // menuclick事件处理
  const menuClick = (e) => {
    if (e.key === "new") {
      //  处理新语言 添加action
      dispatch(AddLanguageActionCreater("新语言", "newLang"));
    } else {
      //切换语言
      dispatch(ChangeLanguageActionCreater(e.key));
    }
  };
  const LangMap = {
    zh: "中文",
    en: "English",
    newLang: "新语言",
  };
  return (
    <div className={styles["app-header"]}>
      {/* top-header */}
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={menuClick}>
                {languageList.map((lan) => (
                  <Menu.Item key={lan.code}>{lan.name}</Menu.Item>
                ))}
                <Menu.Item key={"new"}>添加新语言</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined></GlobalOutlined>}
          >
            {LangMap[language]}
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button onClick={() => history.push("/register")}>注册</Button>
            <Button onClick={() => history.push("/signIn")}>登录</Button>
            <Button onClick={() => history.push("/detail")}>IP查询</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <span onClick={() => history.push("/")} style={{ cursor: "pointer" }}>
          <img src={logo} alt="logo" className={styles["App-logo"]} />
          <Typography.Title level={3} className={styles.title}>
            React 旅游网
          </Typography.Title>
        </span>

        <Input.Search
          className={styles["search-input"]}
          placeholder={"请输入旅游目的地、主题、或关键字"}
        ></Input.Search>
      </Layout.Header>
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
        <Menu.Item key={1}>旅游首页</Menu.Item>
        <Menu.Item key={2}>周末游</Menu.Item>
        <Menu.Item key={3}>跟团游</Menu.Item>
        <Menu.Item key={4}>自由行</Menu.Item>
        <Menu.Item key={5}>私家团</Menu.Item>
        <Menu.Item key={6}>游轮</Menu.Item>
        <Menu.Item key={7}>酒店+景点</Menu.Item>
        <Menu.Item key={8}>主题游</Menu.Item>
        <Menu.Item key={9}>定制游</Menu.Item>
        <Menu.Item key={10}>游学</Menu.Item>
        <Menu.Item key={11}>签证</Menu.Item>
        <Menu.Item key={12}>企业游</Menu.Item>
        <Menu.Item key={13}>高端游</Menu.Item>
        <Menu.Item key={14}>爱玩户外</Menu.Item>
        <Menu.Item key={15}>保险</Menu.Item>
        <Menu.Item key={16}>当地玩乐</Menu.Item>
      </Menu>
    </div>
  );
};
