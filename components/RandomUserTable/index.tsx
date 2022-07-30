import { Table, TableProps } from "antd";
import "antd/dist/antd.css";
import { SorterResult } from "antd/lib/table/interface";
import { useCallback, useEffect, useMemo, useState } from "react";
import useEmitter from "../../hooks/useEmitter";
import type { RandomUserVariables } from "../../model/random-user";
import type { NormalizedRandomUser } from "../../repository/types";
import useRandomUser from "../../repository/use-random-user";
import type { FilterFormType } from "../Filter/types";
import { columnsRandomUser } from "./constants";

const RandomUserTable = () => {
  const defaultVariables: RandomUserVariables = useMemo(
    () => ({ gender: undefined, results: 10 }),
    []
  );
  const [variables, setVariables] = useState(defaultVariables);

  const emitter = useEmitter();

  const { data, loading } = useRandomUser({
    variables: variables,
  });

  const handleFilterOnChange = useCallback(
    (params: CustomEventInit<Record<keyof FilterFormType, string>>) => {
      const { detail = {} } = params;
      const [[key, value]] = Object.entries(detail) ?? [];

      if (key) setVariables((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleOnResetFilter = useCallback(() => {
    setVariables(defaultVariables);
  }, [defaultVariables]);

  const onChange: TableProps<NormalizedRandomUser>["onChange"] = (
    pagination,
    _,
    sorter,
    extra
  ) => {
    const sort = sorter as SorterResult<NormalizedRandomUser>;

    if (extra.action === "paginate") {
      setVariables((prev) => ({
        ...prev,
        page: pagination.current,
        pageSize: pagination.pageSize,
        results: pagination.pageSize,
      }));
    }

    if (extra.action === "sort") {
      setVariables((prev) => ({
        ...prev,
        sortBy: sort.order ? (sort.field as string) : undefined,
        sortOder: sort.order,
      }));
    }
  };

  useEffect(() => {
    emitter.on("@filter/dispatch/form_on_change", handleFilterOnChange);
    emitter.on("@filter/reset_filter", handleOnResetFilter);

    return () => {
      emitter.off("@filter/dispatch/form_on_change", handleFilterOnChange);
      emitter.off("@filter/reset_filter", handleOnResetFilter);
    };
  }, [emitter, handleFilterOnChange, handleOnResetFilter]);

  return (
    <Table
      data-testid="tableRandomUser"
      columns={columnsRandomUser}
      dataSource={data}
      loading={loading}
      pagination={{ total: 100 }} // static total data
      size="small"
      scroll={{ y: 380 }}
      onChange={onChange}
    />
  );
};

export default RandomUserTable;
