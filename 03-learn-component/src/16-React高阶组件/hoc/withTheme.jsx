import ThemeContext from '../context/theme-context'

const withTheme = OriginCpn => props => (
	<ThemeContext.Consumer>
		{
			value => (
				<OriginCpn {...value} {...props} />
			)
		}
	</ThemeContext.Consumer>
)

export default withTheme