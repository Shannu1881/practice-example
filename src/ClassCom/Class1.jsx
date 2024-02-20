import React, { Component } from 'react'
import Class2 from './Class2';

export default class Class1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "shannu",
            role: "Ui dev",
            productlist: [],
            fruits: ["mango", "banana", "apple", "orange"],
            newFruit : ''
        }
    }

    changeName = () => {
        this.setState({
            name: "shanmukha",
            role: "Javascript"
        });
    }

    //     componentDidMount() {
    //     
    //     fetch('https://jsonplaceholder.typicode.com/albums')
    //     .then(res => res.json())
    //     .then(data =>{
    //         this.setState({productlist : data});
    //         console.log(this.state.productlist);
    //     })
    //     .catch(err => console.log(err))
    // }

    getProduct = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/albums');
        let data = await res.json();
        this.setState({ productlist: data });
        console.log(this.state.productlist);
    }

    getFruit = (e) =>{
       this.setState({newFruit : e.target.value})
    }

    save = () =>{
        this.setState({
            fruits : this.state.fruits.concat(this.state.newFruit)
        })
    }


    render() {
        return (
            <div className='container'>
                <h2>Hello Class Components</h2>
                <p> {this.state.name} </p>
                <p> {this.state.role} </p>
                <p> {this.state.productlist.title} </p>
                <button onClick={this.changeName}>change the name</button>
                <button onClick={this.getProduct}>getdata</button>


                <div>

                  <h2> Add Items</h2>
                  <input type="text" name="" id="" onChange={this.getFruit}/>
                  <button onClick={this.save}>Add item</button>
                    <ul>
                        {
                            this.state.fruits.map((item, index) => {
                                return (
                                    <li key={index}> {item} </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
