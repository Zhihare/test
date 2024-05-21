import styled from "styled-components";

export const ListFunctional = styled.ul`

display: flex;
flex-wrap: wrap;
gap: 24px;
`

export const ListFunctionalItem = styled.li`
  position: relative;
  width: 100%;
  padding: 24px;
  border-radius: 4px;
  border: 2px solid var(--border-color-1);
  box-sizing: border-box; 

&:nth-child(2n){
    border-color: var(--border-color-2);
}

&:nth-child(3n){
    border-color: var(--border-color-3);
}

&:nth-child(4n){
    border-color: var(--border-color-4);
}

svg{
    display: block;
    width: 100px;
    height: 100px;

    margin-left: auto;
    margin-bottom: 24px;
}


h3{
    color: var(--title-color);
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 24px;
}

a{
    position: absolute;
    width: fit-content;
    right: 0;
    bottom: 24px;
    transform: translateX(-25%);
    color: var(--text-color);

    font-size: 24px;
    font-weight: 400;
    line-height: 150%;
    text-decoration-line: underline;
}


@media (min-width: 680px) and (max-width: 1380px) {
    width: 48%;
    max-width: calc(1380px - 100px / 2);
}

@media(min-width: 1380px){
    width: 32%;
    max-width: calc(1380px - 100px / 3);
}
`

export const DescriptionLists = styled.ul`
margin-bottom: 48px;

li {
  position: relative; 
  padding-left: 20px;
  margin-bottom: 12px;

  color: var(--text-color);
  font-size: 24px;
  font-weight: 400;
  line-height: 150%;
}

li::before {
  content: '•'; 
  position: absolute; 
  left: 0; 
  top: 16px; 
  transform: translateY(-50%); 
  color: black; 
}

li:last-child {
  margin-bottom: 0;
}



`