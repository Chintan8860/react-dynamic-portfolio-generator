import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { axios } from "axios";
import { useHistory } from "react-router-dom";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(true);
  const userLoginPortFolio = useSelector((state) => state.userLoginPortFolio);
  const { userInfo } = userLoginPortFolio;
  const history = useHistory();

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setPic(userInfo.pic);
      setLoading(false);
    }
  }, []);

  return (
    <>
      <h1>Name : {userInfo?.name}</h1>
      <h1>
        services :
        {!loading &&
          Object.keys(userInfo?.services).map((key, i) => (
            <p key={i}>
              <span>Key Name: {key}</span>
              <span>Value: {userInfo?.services[key]}</span>
            </p>
          ))}
      </h1>
    </>
  );
};

export default ProfileScreen;
