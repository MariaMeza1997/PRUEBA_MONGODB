//* Interfaces
interface Title{
	title: string,
	subtitle: string,
	text?: string,
	alternative?: boolean,
}

const pruebaTitle  = ({ title, subtitle, text, alternative = false }:Title) => {

	return (
		<>

			{
				!alternative ? (
					<div className='prueba_title'>
						{ text !== null && <p className='prueba_title__text'>{text}</p> }
						<h1 className='prueba_title__title'>{title}</h1>
						<h2 className='prueba_title__subtitle'>{subtitle}</h2>
					</div>
				) : (
					<div className='prueba_title'>
						{ text !== null && <p className='prueba_title__text'>{text}</p> }
						<h1 className='prueba_title__subtitle'>{title}</h1>
						<h2 className='prueba_title__title'>{subtitle}</h2>
					</div>
				)
			}

		</>
	)

}

export default pruebaTitle