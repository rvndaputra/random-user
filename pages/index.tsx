import { Breadcrumb, Button, Space, Typography } from "antd";
import "antd/dist/antd.css";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";

const { Title } = Typography;

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Fragment>
      <Space direction="vertical">
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Title>
          Welcome to Random User App 👋
          <Button type="link" onClick={() => router.push("/app")}>
            Click Here
          </Button>
        </Title>
      </Space>
    </Fragment>
  );
};

export default Home;
