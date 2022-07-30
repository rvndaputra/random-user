import { Button, Form, Input, Select } from "antd";
import "antd/dist/antd.css";
import debounce from "lodash.debounce";
import { memo, useCallback, useEffect, useMemo } from "react";
import useEmitter from "../../hooks/useEmitter";
import * as css from "./styles";
import type { FilterFormType } from "./types";

const { Search } = Input;
const { Option } = Select;

const Filter = () => {
  const [form] = Form.useForm<FilterFormType>();
  const emitter = useEmitter();

  const handleOnValueChange = useCallback(
    (data: Record<keyof FilterFormType, any>) => {
      emitter.emit("@filter/dispatch/form_on_change", data);
    },
    [emitter]
  );

  const handleOnResetFilter = () => {
    form.resetFields();

    emitter.emit("@filter/reset_filter");
  };

  const debouncedOnValueChange = useMemo(() => {
    return debounce(handleOnValueChange, 300);
  }, [handleOnValueChange]);

  useEffect(() => {
    return () => {
      debouncedOnValueChange.cancel();
    };
  });

  return (
    <Form
      form={form}
      layout="inline"
      name="horizontal_login"
      onValuesChange={debouncedOnValueChange}
    >
      <Form.Item name="keyword" label="Search" labelCol={{ span: 24 }}>
        <Search placeholder="Search..." enterButton />
      </Form.Item>
      <Form.Item
        className={css.selectGenderStyle}
        name="gender"
        label="Gender"
        labelCol={{ span: 24 }}
      >
        <Select defaultValue="" showSearch>
          <Option value="">All</Option>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>
      <Form.Item className={css.btnResetFilterStyle}>
        <Button type="ghost" onClick={handleOnResetFilter}>
          Reset Filter
        </Button>
      </Form.Item>
    </Form>
  );
};

export default memo(Filter);
