import React from 'react'

type Props={
    className?:string;
    inputStyle?:string;
    placeholder?:string;
    searchType:"GROUPS" | "POSTS"
    iconStyle?:string;
    glass?:boolean
}

const Search = ({searchType,className,glass,iconStyle,inputStyle,placeholder}:Props) => {
  return (
    <div>Search</div>
  )
}

export default Search