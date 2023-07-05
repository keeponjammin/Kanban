import { Box, Typography } from "@mui/material";

import React from 'react'

export default function EmptyBox() {
  return (
    <Box 
        sx={{ 
            width: '100%', maxWidth: 500 
        }}>
        <Typography variant="h1">
            No content here.
        </Typography>
        <Typography variant="h3">
            You should probably create something
        </Typography>
    </Box>
  )
}