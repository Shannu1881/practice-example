import React, { Component } from 'react'

export default class Class2 extends Component {

  render() {
    const { data } = this.props;
    return (
      <div>
         {
            data.map((item, index)=>{
                return(
                    <li key={index}> {item.title} </li>
                )
            })
         }
      </div>
    )
  }
}
