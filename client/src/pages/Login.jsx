import { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //form submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("api/v1/users/login", values);
      setLoading(false);
      message.success("login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div className="login-page">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={submitHandler}>
          <h4>Login Form</h4>
          <Form.Item label="Email address" name="email">
            <Input type="email" placeholder="Enter your email address..." />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" placeholder="Enter your password..." />
          </Form.Item>
          <div className="d-flex justify-content-center flex-column ">
            <button className="btn btn-primary">Login</button>
            <Link to="/register" className="mt-4 text-center">
              Not a user ? Click Here to Register
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
