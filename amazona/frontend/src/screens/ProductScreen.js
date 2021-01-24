import React from 'react'
import data from '../data'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export default function ProductScreen(props) {
    const product = data.products.find((x) => x._id === props.match.params.id);
    if(!product){
        return <div> Product Not Found...</div>
    }
    return (
        <div>
            <Box color="text.primary" clone>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </Box>
            <Box component="div" m={2} clone>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </Box>
            
        </div>
    )
}
