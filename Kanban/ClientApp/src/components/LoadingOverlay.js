import { Box, CircularProgress, Grid } from '@mui/material'
import React from 'react'

export default function LoadingOverlay() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Grid item xs={3}>
                <Box sx={{
                    display: 'flex',
                    width: '100%'
                }}>
                    <CircularProgress />
                </Box>
            </Grid>
        </Grid>
    )
}
