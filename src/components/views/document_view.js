import React, { useCallback, useContext, useEffect, useState } from "react";
import { Button, Divider, Popconfirm, Spin, Table, message } from "antd";
import { deleteItem, getItems } from "../../service/listitem_service";
import { apiUrl } from "../../service/base_service";
import { PageContext } from "../../service/util_service";
import { getNavigator } from "../../service/site_service";


export default function PageView({ list, view }) {
  const [loading, setLoading] = useState(true);
  const { siteInfo } = useContext(PageContext);
  const [items, setItems] = useState([]);

  // noinspection DuplicatedCode
  const columns = [...view.fields.map(n => {
    const field = list.fields.find(f => f.name === n);
    return {
      title: field.title,
      dataIndex: field.name,
      width: field.name === "id" ? 80 : 0,
      render: (prop, values) => {
        if (field.name === "name") {
          // noinspection JSUnresolvedVariable
          return <a href={`${apiUrl}/file/${list.id}/${values.id}`}>{prop}</a>;
        } else {
          return prop;
        }
      }
    };
  }),
    {
      title: "操作",
      render: (values) => {
        return <><a href={`/s/${siteInfo.siteId}/l/${list.id}/f/upload_document?id=${values.id}`}>编辑</a><Divider
          type="vertical"/>
          <Popconfirm
            title="你想要删除这条纪录吗?"
            onConfirm={() => {
              deleteItemAction(values.id).then();
            }}
            okText="是"
            cancelText="否"
          >
            <Button className={"link-button"}> 删除</Button>
          </Popconfirm>
        </>;
      }
    }];

  const fetchItems = useCallback(async () => {
    const items = await getItems(list["staticName"], view.filter);
    setItems(items);
    setLoading(false);
  }, [list, view]);

  useEffect(() => {
    fetchItems().then();
  }, []);

  const deleteItemAction = async (id) => {
    await deleteItem(list["staticName"], id);
    await fetchItems();
    message.success("删除成功!");
  };

  return <Spin spinning={loading}><Table columns={columns} rowKey={"id"} dataSource={items}/></Spin>;
};