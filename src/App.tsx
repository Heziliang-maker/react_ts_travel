import React, { useEffect } from "react";

import styles from "./App.module.css";
import { HomePage, SignInPage, RegisterPage, DetailPage } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// 引入自定义的useSelector
import { useSelector } from "./redux/hooks";
import { getShopppingCart } from "./redux/shopppingcart/slice";
import { Redirect } from "react-router-dom";
import { ShoppingCart, ProductDetail } from "./pages";
import { useDispatch } from "react-redux";
import axios from "axios";
import qs from "qs";

const PrivateRoute = ({ isAuthcated, component, ...rest }) => {
  const RouteComponent = (props) => {
    return isAuthcated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/signIn" }} />
    );
  };
  return <Route render={RouteComponent} {...rest} />;
};

function App() {
  const jwt = useSelector((s) => s.user.token);
  const dispatch = useDispatch();

  // 请求购物车数据
  useEffect(() => {
    if (jwt) {
      dispatch(getShopppingCart());
      const data = {
        name: "123",
        code: 1,
        arr: [1, 2],
      };
      axios.post("https://www.baidu.com", qs.stringify(data,)).then(
        (res) => {
          console.log("=>", res);
        },
        (err) => {
          console.log(
            "=>",
            err,
            qs.stringify(data, { arrayFormat: "indices" })
          );
        }
      );
    }
  }, [jwt]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}>
          {/* <div className={styles.App}></div> */}
        </Route>

        <Route path="/signIn" component={SignInPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        {/* <Route path="/detail/:id?" component={DetailPage}></Route> */}
        <Route path="/detail/:touristId?" component={ProductDetail}></Route>
        <PrivateRoute
          isAuthcated={jwt !== null}
          component={ShoppingCart}
          path="/shoppingcart"
        />
        {/* 404页面永远在最后 */}
        <Route render={() => <h2>404 NOT FOUND</h2>}></Route>
      </Switch>
    </Router>
  );
}

export default App;
