import React from 'react';

class TodoItem extends React.Component{

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    handleItemClick() {
        this.props.delItem(this.props.index)
    }

    render() {
        return (
            <div onClick={this.handleItemClick}>{this.props.content}</div>
        )
    }

}

export default TodoItem;
