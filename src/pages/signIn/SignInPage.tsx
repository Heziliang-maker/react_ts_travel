import React, { useEffect } from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { logInThunk } from "../../redux/user/userActions";
import { useSelector } from "../../redux/hooks";
import { useHistory } from "react-router-dom";

export const SignInPage: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((s) => s.user.loading);
  const jwt = useSelector((s) => s.user.token);
  const history = useHistory();

  useEffect(() => {
    console.log("jwt??=>", jwt);
    if (jwt) {
      // 跳转首页
      history.push("/");
    }
  }, [jwt]);

  return (
    <div>
      <h2>SignInPage</h2>
      <Button
        loading={loading}
        onClick={() => {
          console.log("=>", "//点击登录");
          dispatch(logInThunk());
        }}
      >
        登录
      </Button>
    </div>
  );
};
