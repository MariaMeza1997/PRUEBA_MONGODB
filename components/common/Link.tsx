//* Next components
import type { NextPage } from 'next'

//* Interfaces
interface Props {
	url: string,
	text: string,
}

/**
 * @author Maria Meza
 * @name pruebaLink
 * @description  pruebaLink
 */

const pruebaLink: NextPage<Props> = ({ url, text }) => {

	return (

		<a href={url} className='prueba_link'>

			{/** Text */}
			<div className="prueba_link__text">{text}</div>

			{/** Icon */}
			<div className='prueba_link__icon'>
				<div className='prueba_link__icon__line' />
				<div className='prueba_link__icon__circle'>
					<div className='prueba_link__icon__circle__arrow' />
				</div>
			</div>

		</a>

	)

}

export default pruebaLink