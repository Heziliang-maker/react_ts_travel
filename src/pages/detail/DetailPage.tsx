import React, { useState, useEffect } from "react";
import { useParams, RouteComponentProps } from "react-router-dom";

interface MatchParams {
  id: string;
}
export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (
  props
) => {
  const [code, setCode] = useState("");
  const [regionName, setRegionName] = useState("");
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetch("http://ip-api.com/json")
      .then((response) => response.json())
      .then((res) => {
        // console.log("=>", res);
        setCode(res.countryCode);
        setRegionName(res.regionName);
        setIp(res.query);
      });
  }, []);

  // const params = useParams();
  // console.log("=>", params);
  return (
    <div style={{ textAlign: "center", margin: "100px auto" }}>
      {props.match.params.id ? (
        <p>参数为:{props.match.params.id}</p>
      ) : (
        <p>未传参数</p>
      )}
      <p style={{ fontSize: "20px" }}>
        <span>{ip}</span> /<span>{code}</span>/<span>{regionName}</span>
      </p>
    </div>
  );
};
