import classNames from 'classnames'
import React from 'react'

const { useState } = React

export default ({ items }: { items: { title: string; body: string }[] }) => {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div>
      {items.map(({ title, body }, idx) => (
        <div key={idx}>
          <div className='grid grid-cols-6 mb-2 items-center' onClick={() => setActiveIdx(idx)}>
            <div className={classNames('montserrat text-sm col-span-1', idx === activeIdx ? 'text-governor-bay' : 'text-silver-chalice')}>{idx < 10 ? `0${idx + 1}` : idx + 1}</div>
            <div className={classNames('montserrat col-span-5 uppercase tracking-wider', idx === activeIdx ? 'font-bold text-governor-bay' : 'text-silver-chalice')}>{title}</div>
          </div>
          {activeIdx === idx && (
            <div className='grid grid-cols-6'>
              <div className='col-start-2 col-span-5 mb-4'>
                {body ||
                  'Lollipop gingerbread lollipop chocolate chocolate carrot cake. Macaroon dessert cookie donut muffin. Bear claw liquorice cotton candy danish bonbon. Jelly-o jujubes tootsie roll halvah lemon drops gummies candy carrot cake. Carrot cake jelly icing liquorice bear claw caramels sweet roll candy canes muffin. Fruitcake tiramisu candy fruitcake.'}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
