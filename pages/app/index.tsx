import { Breadcrumb, Space, Typography } from "antd";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import Filter from "../../components/Filter";
import RandomUserTable from "../../components/RandomUserTable";
import * as css from "../../styles/pages/app/styles";

const { Title } = Typography;

const RandomUserApp = () => {
  const router = useRouter();

  const handleOnRedirectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <Fragment>
      <Space className={css.spaceStyle} direction="vertical" size="small">
        <Breadcrumb>
          <Breadcrumb.Item href="" onClick={handleOnRedirectClick}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Example Page</Breadcrumb.Item>
        </Breadcrumb>
        <Title>Example With Search and Filter</Title>
        <Filter />
        <RandomUserTable />
      </Space>
    </Fragment>
  );
};

export default RandomUserApp;
