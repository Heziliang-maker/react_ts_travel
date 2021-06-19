// 类组件 --使用react-redux

import React from "react";

import logo from "../../logo.svg";
import styles from "./Header.module.css";
import { GlobalOutlined } from "@ant-design/icons";

import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";

import { RouteComponentProps, withRouter } from "react-router-dom";

import { RouteState } from "../../redux/store";
//数据共享: 1 订阅 2 react-redux
import { connect } from "react-redux";

import {
  AddLanguageActionCreater,
  ChangeLanguageActionCreater,
} from "../../redux/language/LanguageActions";
import {
  // giveMyDataActionCreater,
  getUserThunk,
  logOutThunk,
} from "../../redux/user/userActions";

import { languageSlice } from "../../redux/language/slice";

const mapStateToProps = (state: RouteState) => {
  return {
    language: state.language.language,
    languageList: state.language.languageList,
    jwt: state.user.token,
    shoppingCartItems: state.shoppingCart.items,
  };
};
// 这个地方不要给dispatch定义类型 因为用了中间件 分发的是ThunkAction
const mapDispatchToProps = (dispatch) => {
  // 返回对象 填充对应的dispatch
  return {
    changeLanguage: (code: "zh" | "en") => {
      const action = ChangeLanguageActionCreater(code);
      dispatch(languageSlice.actions.changeLanguage(code));
    },
    addLanguage: (name: string, code: string) => {
      const action = languageSlice.actions.addLanguage({ name, code });
      dispatch(action);
    },
    addUser: () => {
      // const action = giveMyDataActionCreater();
      dispatch(getUserThunk(2));
    },
    logOut: () => {
      // const action = giveMyDataActionCreater();
      dispatch(logOutThunk());
    },
  };
};
// 在外边定义类型  react-route props + store 注入的
type PropsType = RouteComponentProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
// 因为要使用hoc 不能导出 而且名称以Component结尾 泛型使用RouteComponentProps
class HeaderComponent extends React.Component<PropsType> {
  menuClick(e) {
    if (e.key === "new") {
      //  处理新语言 添加action
      this.props.addLanguage("新语言", "newLang");
    } else {
      //切换语言
      this.props.changeLanguage(e.key);
    }
  }

  componentDidMount() {
    this.props.addUser();
  }

  render() {
    const { history } = this.props;
    return (
      <div className={styles["app-header"]}>
        {/* top-header */}
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Typography.Text>让旅游更幸福</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu onClick={(e) => this.menuClick(e)}>
                  {this.props.languageList.map((lang) => (
                    <Menu.Item key={lang.code}>{lang.name}</Menu.Item>
                  ))}
                  <Menu.Item key={"new"}>添加语言</Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined></GlobalOutlined>}
            >
              {this.props.language === "zh" ? "中文" : "English"}
            </Dropdown.Button>
            <Button.Group className={styles["button-group"]}>
              {this.props.jwt !== null ? (
                <>
                  <Button
                    onClick={() => {
                      const str = decodeURIComponent("22312||1113");
                      history.push(`/detail/${str}`);
                    }}
                  >
                    购物车({this.props.shoppingCartItems.length})
                  </Button>
                  <Button>hello,mr he!</Button>
                  <Button onClick={() => this.props.logOut()}>登出</Button>
                </>
              ) : (
                <>
                  <Button onClick={() => history.push("/register")}>
                    注册
                  </Button>
                  <Button onClick={() => history.push("/signIn")}>登录</Button>
                </>
              )}
              {/*
              <Button onClick={() => history.push("/signIn")}>登录</Button>
              <Button onClick={() => history.push("/detail")}>IP查询</Button> */}
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
  }
}

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HeaderComponent));
