import React from 'react';


//第一种创建组件的方式，定义一个function
//在构造函数中，接受外界传递过来的数据
export default function Hello(props) {
    //组件中的props永远都是只读的
    console.log(props);
    return <div>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <h2>{props.address}</h2>
        <h2>{props.age}</h2>
        <h2>{props.age}</h2>
    </div>
}
