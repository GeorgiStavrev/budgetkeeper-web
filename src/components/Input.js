import React from 'react'

export default class Input extends React.Component {
    constructor() {
        super();
        this.state = { value: "" };
    }

    handleChange = e => {
        this.setState({ value: e.target.value })
    };

    handleKeyPress = e => {
        if (e.key !== "Enter") return;

        const { onSubmitEditing } = this.props;
        const { value } = this.state;

        if (!value) return;

        onSubmitEditing(value);
        this.setState({ value: "" });
    };

    render() {
        const { placeholder } = this.props;
        const { value } = this.state;

        return (
            <input 
                style={styles.input}
                type={'text'}
                placeholder={placeholder}
                value={value} 
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}/>
        );
    }
}

const styles = {
    input: {
        fontSize: "100%",
        padding: 15,
        borderWidth: 0
    }
};