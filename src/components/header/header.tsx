import React from 'react'

export default function Header() {
  return (
    <div style={{display: 'flex', padding: '0 100px 0 50px', paddingBottom: '10px', fontWeight: 'bold'}}>
      <div style={{flex: 3}}>Name</div>
      <div style={{flex: 3}}>Email</div>
      <div style={{flex: 2}}>Phone number</div>
      <div style={{flex: 1}}>Gender</div>
      <div style={{flex: 1}}></div>
    </div>
  )
}
