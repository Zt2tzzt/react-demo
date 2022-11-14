import styled from 'styled-components';
import { primaryColor, largeSize } from './variables';

// style.div`` 返回一个组件，这个组件渲染一个 div 元素。
export const AppWrapper = styled.div`
	.footer {
		border: 1px solid orange;
	}
`

// 1. 子元素单独抽取到一个样式组件
// 2. 可以接收外部传入的 props
// 3. 可以通过 attrs 给标签模板字符串中提供属性值
// 4. 从一个单独的文件中引入变量
export const SectionWrapper = styled.div.attrs(props =>({
	tcolor: props.color || 'blue' // 为避免递归，使用 tcolor 代替传递过来的 color
}))`
	border: 1px solid red;

	.title {
		font-size: ${props => props.size}px;
		color: ${props => props.tcolor};

		&:hover {
			background-color: purple;
		}
	}

	.content {
		font-size: ${largeSize}px;
		color: ${primaryColor};
	}
`