import React from 'react'
import ListItem from '../components/ExpensesListItem'
import '../App.css'

export default class ExpensesList extends React.Component {
    render() {
        const { items, onClickItem, onClickItemOption1, onClickItemOption2 } = this.props
        return (
            <div style={styles.container}>
                {items.map(item => 
                <ListItem 
                    key={item.id}
                    item={item} 
                    onClick={onClickItem}
                    onClickOption1={onClickItemOption1}
                    onClickOption2={onClickItemOption2} /> )}
            </div>
        );
    };
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column"
    }
};