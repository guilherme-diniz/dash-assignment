'use client'
import { FixedSizeList as List } from 'react-window';
import { Customer } from '../../types/Customer';
import ListItem from '../list-item/ListItem';
import { useEffect, useState } from 'react';

interface VirtualizedListProps {
  data: Customer[];
}

export const VirtualizedList = (props: VirtualizedListProps) => {
  const [windowSize, setWindowSize] = useState<{width: number, height: number}>();

  useEffect(() => {
    if (!window) return;
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
  }, [])

  return (
          <List
            height={windowSize?.height ?? 800}
            itemCount={props.data.length}
            itemSize={80}
            style={{backgroundColor: '#dedede', margin: '0 auto'}}
            width={(windowSize?.width ?? 900) - 80}>
            {({ index, style }) => {
              const item = props.data[index];
              return (
                <ListItem 
                  style={style} 
                  customer={props.data[index]} 
                />
              );
            } }
          </List>
  );
};