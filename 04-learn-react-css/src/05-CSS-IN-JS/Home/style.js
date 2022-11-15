import styled from 'styled-components';

const ZTButton = styled.button`
	border: 1px solid red;
	border-radius: 5px;
`

// 集成 ZTButton 的2个样式
export const ZTButtonWrapper = styled(ZTButton)`
	background-color: #0f0;
	color: #fff;
`

export const HomeWrapper = styled.div`
	.top {
		.banner {
			color: red;
		}
	}

	.bottom {
		.header {
			color: ${props => props.theme.color};
			font-size: ${props => props.theme.size};
		}

		.product-list {
			.item {
				color: blue;
			}
		}
	}
`