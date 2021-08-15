import { useState, useEffect, useContext } from 'react';
import { Table, Space } from 'antd';
import GlobalStateContext from "../../global/GlobalStateContext";

const StickyHeadTable = () => {
  const { clients, setClients } = useContext(GlobalStateContext);

  let data = []
  const dataSource = clients.forEach((each) => {
    data.push({ key: each.id, id: each.id, name: each.name, surname: each.surname, type: each.document_type })
  })

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Nome/Nome Fantasia', dataIndex: 'name', key: 'name' },
    { title: 'Sobrenome/Razão Social', dataIndex: 'surname', key: 'surname' },
    { title: 'Tipo', dataIndex: 'type', key: 'type' },
  ]

  return (
    <div>
      <Table columns={columns} dataSource={data} />

   </div>
  );
}

export default StickyHeadTable