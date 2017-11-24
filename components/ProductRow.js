import React from 'react'
import { Table, Button, ButtonToolbar } from 'react-bootstrap' 

export default class ProductRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.description}</td>
                <td>{this.props.brand}</td>
                <td>{this.props.producer}</td>
                <td>{this.props.imageUrl}</td>
                <td>
                {
                <ButtonToolbar>
                    <Button onClick={this.props.onClick}>EDIT</Button>
                    <Button bsStyle="danger">DELETE</Button>
                </ButtonToolbar>

                }
                </td>
            </tr>
        )
    }
}
