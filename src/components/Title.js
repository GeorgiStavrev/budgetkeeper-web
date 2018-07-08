import React from 'react'

export default class Title extends React.Component {
    render() {
        const { children, onClickButton, allShown } = this.props
        return (
            <div style={styles.header}>
                <div style={styles.title}>{children}</div>
                <input type={'button'} style={styles.button} onClick={onClickButton} value={allShown? 'Hide completed' : 'Show all'}/>
            </div>
        )
    }
}

const styles = {
    header: {
        backgroundColor: "skyblue",
        display:"flex",
        flexDirection:"row"
    },
    title: {
        padding: 15,
        textAlign:"center",
        color: "white",
        textAlign: "center",
        minWidth:"70%",
        flex:1
    },
    button: {
        flex:1
    }
};