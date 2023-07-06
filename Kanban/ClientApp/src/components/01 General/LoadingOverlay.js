import { Box, CircularProgress, Grid } from '@mui/material';
import React from 'react';

export default function LoadingOverlay() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                <Box display="flex" width="100%" justifyContent="center">
                    <CircularProgress />
                </Box>
            </Grid>
        </Grid>
    );
}
