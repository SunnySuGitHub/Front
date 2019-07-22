import React from 'react';//创建组件。虚拟dom元素，生命周期
import ReactDOM from 'react-dom';
import Hello from './components/Hello';
import Animal from './components/Animal';
//使组件可以挂载到document上
//大写字母开头的都是组件
import Todolist from './Todolist';
// 入口文件
// ReactDOM.render(<Todolist />, document.getElementById('root'));

//创建组件的第二种方式


const dog = {
    name: '大黄',
    age: 3
};

const cat = {
    name:'咪咪',
    age:2,
    address:'武汉'
};




//使用组件为组件传递props数据,...展开运算符，用于将数组或者对象里面的属性展开放到另一个地方供其使用
ReactDOM.render(
    <div>

    {/*<Hello name={dog.name} age={dog.age} {...cat}/>,*/}
        {<Animal name={'hi'} />}
    </div>,
    document.getElementById('root')
);
//ReactorDOM可以将App这个组件渲染到HTML的一个节点上

