import React, { useEffect, useRef, useState } from 'react'
import { VirtualizedList } from '../components/list/VirtualizedList';
import Header from '../components/header/header';
import { Customer } from '../types/Customer';
import dataFromJson from '../data.json';


export default function IndexContainer() {
  const [data, setData] = useState<Customer[]>([]);
  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setData(dataFromJson);
  }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      setData(dataFromJson.filter((customer) => {
        return customer.name.toLowerCase().includes(e.target.value.toLowerCase());
      }));
    }, 600);
  }

  return (
    <div style={{backgroundColor: '#dedede', padding: '20px '}}>
      <h1>Customer List</h1>
      <input 
        type="text" 
        placeholder="Search..."
        onChange={handleSearch}
        style={{
          width: '250px', 
          padding: '10px', 
          fontSize: '12px', 
          marginBottom: '20px', 
          borderRadius: '20px', 
          border: 'none'
        }}
      />
      <Header/>
      <VirtualizedList data={data}/>
    </div>
  );
}
