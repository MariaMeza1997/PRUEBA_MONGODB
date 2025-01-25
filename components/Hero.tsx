//* Next components
import type { NextPage } from 'next'

//* Components
import Title  from './common/Title'

/**
 * @author Maria Meza
 * @name Hero
 * @description Hero
 */
const Hero: NextPage = () => {

	return (

		<div>
			<div className='portada'>

				<div className='container'>

					<Title
						title="Prueba"
						subtitle="Todo List"
						text=""
						alternative={false}
					/>

					<div className='animacionPortada'>
						
						<div className='carita'>
							<div className='ojo'></div>
							<div className='ojoDos'></div>
							<div className='boca'></div>
						</div>

					</div>

				</div>

			

			</div>

		</div>
		
	)

}

export default Hero