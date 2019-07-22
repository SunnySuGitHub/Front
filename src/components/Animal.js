import React from 'react';


//如果要使用class定义组件，必须继承React.Component
export default class Animal extends React.Component{

    //render函数的作用：渲染当前组件所对应的DOM元素
    render() {
        return <div>
            {/*在class关键字创建的组件中，如果想使用外界传递过来的props参数，不许接受，直接通过this.props.***来访问*/}
            这是一个Animal组件 -- {this.props.name}

        </div>
    }

}


