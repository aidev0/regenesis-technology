import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

function Solutions() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
        AI & Genetic Solutions for Aging
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="🔬 AI-driven genomic analysis to detect aging biomarkers." />
        </ListItem>
        <ListItem>
          <ListItemText primary="🧠 Machine learning models predicting personalized longevity strategies." />
        </ListItem>
        <ListItem>
          <ListItemText primary="🧬 Genetic reprogramming recommendations to reverse cellular aging." />
        </ListItem>
        <ListItem>
          <ListItemText primary="💊 AI-assisted drug discovery for age-related disease prevention." />
        </ListItem>
      </List>
    </Container>
  );
}

export default Solutions;
