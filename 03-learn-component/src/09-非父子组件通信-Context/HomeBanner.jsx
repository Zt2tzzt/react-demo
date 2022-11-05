import ThemeContext from './context/theme-context'

function HomeBanner() {
	return (
		<div>
			{/* 函数式组件中，使用 context 共享数据 */}
			<ThemeContext.Consumer>
				{
					value => (
						<h2>Banner theme: { value.color }</h2>
					)
				}
			</ThemeContext.Consumer>
		</div>
	)
}

export default HomeBanner