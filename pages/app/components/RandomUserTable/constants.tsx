import type { TableColumnsType } from "antd";
import dayjs from "dayjs";
import type { NormalizedRandomUser } from "../../repository/types";

export const columnsRandomUser: TableColumnsType<NormalizedRandomUser> = [
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
    width: "15%",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "20%",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (str) => <a href="mailto: abc@example.com">{str}</a>,
    width: "30%",
    sorter: (a, b) => a.email.localeCompare(b.email),
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    width: "10%",
    sorter: (a, b) => a.gender.localeCompare(b.gender),
  },
  {
    title: "Registered Date",
    dataIndex: "registered_date",
    key: "registered_date",
    render: (str) => dayjs(str).format("DD-MM-YYYY hh:mm A"),
    width: "25%",
    sorter: (a, b) =>
      dayjs(a.registered_date).unix() - dayjs(b.registered_date).unix(),
  },
];
