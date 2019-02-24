import React, { Component } from 'react';
import styled from "styled-components";

const Icon = styled.svg `
    fill: ${
	    props => (
		    props.color
	    )
    };
`

export class SVGIcon extends Component {
    constructor(props) {
        super(props);
        this.buildIcon=this.buildIcon.bind(this);
    }

    buildIcon(image) {
        return(
            <g>
                {image.map((imagepath, i) => {
                    return (
                        <path key={i} d={imagepath}/>
                    )
                })}
            </g>
        )
    }

    render() {
        return (
            <Icon color={this.props.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
                {this.buildIcon(this.props.image)}
            </Icon>
        );
    }
}