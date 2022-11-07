import React, { PureComponent } from 'react'

export class App extends PureComponent {
	constructor()  {
		super()
		this.state = {
			books: [
				{ name: '你不知道的JavaScript', price: 99, count: 1 },
				{ name: 'JavaScript高级程序设计', price: 88, count: 2 },
				{ name: 'React高级设计', price: 78, count: 2 },
				{ name: 'Vue高级设计', price: 99, count: 3 }
			],

		}
	}
	render() {
		const { books } = this.state
		return (
			<div>
				<h2>数据列表</h2>
				<ul>
					{
						books.map((item, index) => (
							<li key={ index }>
								<span>name: { item.name }-price: { item.price }-count: { item.count }</span>
								<button onClick={ e => this.addBookCount(index) }>+1</button>
							</li>
						))
					}
				</ul>
				<button onClick={ e => this.addNewBook() }>添加新书籍</button>
			</div>
		)
	}

	addBookCount(index) {
		const books = [...this.state.books]
		books[index].count++
		this.setState({ books: books })
	}

	addNewBook() {

		const newBook ={ name: 'Angular高级设计', price: 88, count: 1 }
		/**
		 * 1.直接修改原有的 state，重新设值一遍，
		 * 	这种方式在 PureComponent 中不能引起页面的渲染（调用 render 函数）
		 * 	原因是 this.state.books 的引用弟子没有改变。
		 */
		this.state.books.push(newBook)
		this.setState({ books: this.state.books })

		/**
		 * 2.复制一份 books，在新的 books 中修改，设值新的 books
		 */
		const books = [...this.state.books]
		books.push(newBook)
		this.setState({ books })
	}
}

export default App