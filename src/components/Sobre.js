import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export default class Sobre extends React.Component{

    render(){
        
        return ( 
            <div>
			
				<Paper className="m0 p50">

					<Typography variant="h5" align="center">
						SysUtilApp
					</Typography>
					
					<Typography variant="subtitle1" align="center" className="mt20">
						Desenvolvimento por <b>Paloma Macetko</b>
					</Typography>
					
					<Divider />
					
					<Typography variant="subtitle2" align="center" className="mt20">
						Aplicativo desenvolvimento como forma de agrupar ferramentas úteis.
					</Typography>

					<Typography variant="subtitle2" align="center" className="mt20">
						<a href="mailto:cmacetko@gmail.com">cmacetko@gmail.com</a>
						<br />
						<a href="https://github.com/cmacetko/">https://github.com/cmacetko/</a>
						<br />
						<a href="https://www.npmjs.com/~cmacetko">https://www.npmjs.com/~cmacetko</a>
						<br />
						<a href="https://cmacetko.medium.com">https://cmacetko.medium.com</a>
						<br />
						<a href="https://www.facebook.com/cmacetko">https://www.facebook.com/cmacetko</a>
						<br />
						<a href="https://www.instagram.com/cmacetko/">https://www.instagram.com/cmacetko/</a>
						<br />
						<a href="https://twitter.com/cmacetko">https://twitter.com/cmacetko</a>
						<br />
						<a href="skype:cmacetko">Skype: cmacetko</a>
						<br />
						<a href="https://web.whatsapp.com/send?phone=554791277858">Whatsapp: 47-91277858</a>
					</Typography>

				</Paper>

			</div>
        )

    }

}