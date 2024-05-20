import React from 'react'
import ItemInfo from './ItemInformation'
import icons from '../img/symbol-defs.svg'



const List = () => {
    console.log(ItemInfo);
  return (
      <div>
          <ul>
              {ItemInfo.map(({ id, name, description, icon}) => (
                  <li key={id}>
                    <svg className="logo header">
                        <use href={icons + `${icon}`}></use>
                      </svg>
                      <h3>{name}</h3>
                      <ul>
                          {description.map((item) => (
                              <li key={item}>
                                {item}
                              </li>
                          ))}
                      </ul>
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default List