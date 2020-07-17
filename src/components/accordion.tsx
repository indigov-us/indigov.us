import React from 'react'

export default ({ items }: { items: { title: string; body: string }[] }) => (
  <div>
    {items.map(({ title, body }, i) => (
      <div key={i}>
        <div className='flex'>
          <div>{i < 10 ? `0${i + 1}` : i + 1}</div>
          <div>{title}</div>
        </div>
        <div>{body}</div>
      </div>
    ))}
  </div>
)
