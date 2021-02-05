import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class ModTitle extends React.Component{

    constructor(props){

        super(props);

    }

    render(){
        
        return ( 
            <div>

                <Grid container direction="row" alignItems="center">
				
                    <Typography variant="h5">{this.props.title}</Typography>
					
					
                </Grid>

            </div>
        )

    }

}