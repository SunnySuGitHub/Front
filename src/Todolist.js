import React from 'react';
import TodoItem from './TodoItem';

//定义一个React组件
class Todolist extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            list:[],
            inputValue:''
        }
        this.inputOnChange = this.inputOnChange.bind(this)
    }

    inputOnChange(e){
        this.setState({
            inputValue : e.target.value
        })
    }

    handleBtnClick(){
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            inputValue : ''
        })
    }

    delItem(index) {
        const list = [...this.state.list];
        list.splice(index, 1)
        this.setState({
            list:list
        })
    }

    render() {
        return (//return的内容就是这个组件要显示的内容
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputOnChange}/>
                    <button onClick={this.handleBtnClick.bind(this)}>
                        add
                    </button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index)=>{
                            // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
                            //父组件通过属性的形式向子组件传递参数，此例子中属性名字为content
                            //子组件通过props接受父组件传递过来的参数
                            return <TodoItem content = {item} index = {index} delItem = {this.delItem.bind(this)}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Todolist;
