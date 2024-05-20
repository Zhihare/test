import React from 'react'
import ItemInfo from './ItemInformation'
import icons from '../img/symbol-defs.svg'
import { DescriptionLists, ListFunctional, ListFunctionalItem } from './list.styled';



const List = () => {
    console.log(ItemInfo);
  return (
      <div>
          <ListFunctional>
              {ItemInfo.map(({ id, name, description, icon}) => (
                  <ListFunctionalItem key={id}>
                    <svg className="logo header">
                        <use href={icons + `${icon}`}></use>
                      </svg>
                      <h3>{name}</h3>
                      <DescriptionLists>
                          {description.map((item) => (
                              <li key={item}>
                                <p>{item}</p>
                              </li>
                          ))}
                      </DescriptionLists>
                      <a href="#section1" title="View more about section 1">View more</a>

                  </ListFunctionalItem>
              ))}
          </ListFunctional>
    </div>
  )
}

export default List