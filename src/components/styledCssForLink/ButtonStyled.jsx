import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(NavLink)`
    display: inline-block;
	box-sizing: border-box;
	padding: 0 16px;
	margin: 0 15px 15px 0;
	outline: none;
	border: none;
	border-radius: 4px;
	height: 30px;
	line-height: 30px;
	font-size: 12.5px;
	font-weight: normal;
	text-decoration: none;
	vertical-align: top;
	color: #fff;
	background-color: #5181b8;
	cursor: pointer;
	user-select: none;
	appearance: none;
	touch-action: manipulation;
	overflow: hidden;
`

export default Button;