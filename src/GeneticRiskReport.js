import React from "react";
import { Container, Typography, Paper, Box, Grid, Card, CardContent } from "@mui/material";

const risks = [
  {
    title: "🧠 Brain & Mental Health Risks",
    details: "Your genetics (Rs4027132, Rs1064395, Rs995030) show a higher risk for bipolar disorder, schizophrenia, and testicular cancer. Your brain may be more sensitive to neurochemical imbalances.",
    prevention: "Maintain a healthy lifestyle with a balanced diet, regular exercise, and mental wellness activities like meditation and cognitive exercises.",
  },
  {
    title: "❤️ Heart & Metabolic Risks",
    details: "Increased risk of hypertension, type-2 diabetes, and cardiovascular disease (Rs599839, Rs662799, Rs4402960). Your genes impact insulin sensitivity and cholesterol metabolism.",
    prevention: "Follow a heart-healthy diet, limit sugar intake, and engage in consistent cardiovascular exercise.",
  },
  {
    title: "🛡️ Immune System & Inflammation",
    details: "Higher risk for autoimmune diseases like Crohn’s disease, rheumatoid arthritis, and multiple sclerosis (Rs10830963, Rs3738919, Rs1265181). Your immune system may trigger inflammation more easily.",
    prevention: "Follow an anti-inflammatory diet rich in turmeric, probiotics, and omega-3s. Manage stress effectively.",
  },
  {
    title: "💊 Drug Sensitivity & Detoxification",
    details: "Your body may struggle to metabolize certain drugs efficiently (Rs1800462, Rs4244285, Rs12777823), potentially leading to increased side effects or reduced effectiveness.",
    prevention: "Consult a healthcare professional before taking new medications to assess potential risks and alternative options.",
  },
];

const riskBreakdown = [
  {
    category: "🚨 Critical Risks (Magnitude 6.0 - 8.8)",
    color: "#b71c1c",
    risks: [
      {
        title: "🧬 Glycine Encephalopathy",
        magnitude: "8.8",
        genotype: "Rs386833549 (C;C)",
        impact: "Severe metabolic disorder affecting brain function.",
        recommendation: "Consult a genetic specialist for further evaluation and management.",
      },
      {
        title: "🧬 Fanconi Anemia",
        magnitude: "7.0",
        genotype: "Rs730881888 (A;A)",
        impact: "Rare inherited bone marrow failure syndrome.",
        recommendation: "Seek genetic counseling and potential medical interventions.",
      },
      {
        title: "🧬 Gaucher's Disease",
        magnitude: "8.0",
        genotype: "Rs1064651 (C;C)",
        impact: "Potential enzyme deficiency affecting metabolism.",
        recommendation: "Medical evaluation and enzyme replacement therapy may be required.",
      },
    ],
  },
  {
    category: "🚨 Severe Risks (Magnitude 3.0 - 5.9)",
    color: "#d32f2f",
    risks: [
      {
        title: "🧬 Non-Phenylketonuria Hyperphenylalaninemia",
        magnitude: "5.9",
        genotype: "Rs62514958 (G;G)",
        impact: "Affects phenylalanine metabolism, impacting brain function and neurotransmitters.",
        recommendation: "Monitor phenylalanine levels, follow dietary recommendations, and seek medical advice.",
      },
      {
        title: "🧬 Detoxification Impairment",
        magnitude: "3.5",
        genotype: "Rs1800462 (C;C)",
        impact: "Reduced ability to detoxify chemicals and drugs, leading to higher toxin accumulation.",
        recommendation: "Eat detoxifying foods (greens, turmeric), avoid unnecessary medications.",
      },
      {
        title: "🧬 Type-2 Diabetes Risk",
        magnitude: "3.0",
        genotype: "Rs7754840 (C;G)",
        impact: "Higher insulin resistance, making it easier to develop diabetes.",
        recommendation: "Follow a low-glycemic diet, stay active, and monitor blood sugar.",
      },
    ],
  },
  {
    category: "⚠️ High Risks (Magnitude 2.0 - 2.9)",
    color: "#f57c00",
    risks: [
      {
        title: "🧬 Alzheimer's Disease Risk",
        magnitude: "2.0",
        genotype: "Rs2075650 (A;G)",
        impact: "2x higher risk of Alzheimer's disease.",
        recommendation: "Eat omega-3s, do mental exercises, and maintain social connections.",
      },
      {
        title: "🧬 Autoimmune Disease Risk",
        magnitude: "2.7",
        genotype: "Rs10830963 (C;G)",
        impact: "Increased risk for Crohn’s disease, rheumatoid arthritis, and lupus.",
        recommendation: "Follow an anti-inflammatory diet (turmeric, probiotics, omega-3s).",
      },
      {
        title: "🧬 Increased Risk of Rheumatoid Arthritis",
        magnitude: "2.5",
        genotype: "Rs3738919 (C;C)",
        impact: "1.94x higher likelihood of developing rheumatoid arthritis.",
        recommendation: "Consider joint-friendly activities, anti-inflammatory diet, and early screening.",
      },
    ],
  },
  {
    category: "🟡 Moderate Risks (Magnitude 1.0 - 1.9)",
    color: "#388e3c",
    risks: [
      {
        title: "🧬 Elevated Risk for Atrial Fibrillation",
        magnitude: "1.5",
        genotype: "Rs13376333 (C;T)",
        impact: "Higher likelihood of irregular heartbeat, increasing stroke risk.",
        recommendation: "Monitor heart health, do ECG checkups, and control blood pressure.",
      },
      {
        title: "🧬 Bipolar Disorder Susceptibility",
        magnitude: "1.5",
        genotype: "Rs4027132 (A;G)",
        impact: "1.39x increased likelihood of developing bipolar disorder.",
        recommendation: "Practice stress management and regular mental health check-ins.",
      },
    ],
  },
];

const GeneticRiskReport = () => {
  return (
    <Container maxWidth="lg" sx={{ background: "#F3F4F6", minHeight: "100vh", py: 5 }}>
      <Paper elevation={6} sx={{ p: 5, borderRadius: "15px", bgcolor: "#ffffff", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}>
        {/* Header */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#37474f", mb: 4 }}
        >
          🧬 Genetic Risk Report for Jacob Rafati
        </Typography>

        {/* Summary Cards */}
        <Grid container spacing={4} sx={{ mb: 5 }}>
          {risks.map((risk, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                elevation={6}
                sx={{
                  borderRadius: "12px",
                  background: "#E3F2FD",
                  color: "#1E88E5",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 3,
                  maxHeight: "220px",
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0D47A1", mb: 1 }}>
                    {risk.title}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "1.1rem", color: "#000" }}>
                    {risk.details}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2, fontWeight: "regular", color: "#2E7D32" }}>
                    {risk.prevention}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Detailed Risk Breakdown */}
        {riskBreakdown.map((riskCategory, index) => (
          <Box key={index} sx={{ mb: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: riskCategory.color, mb: 2 }}>
              {riskCategory.category}
            </Typography>
            {riskCategory.risks.map((risk, idx) => (
              <Box
                key={idx}
                sx={{
                  bgcolor: "#ffffff",
                  p: 4,
                  borderRadius: "12px",
                  mb: 3,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                  borderLeft: `6px solid ${riskCategory.color}`,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#37474f" }}>
                  {risk.title} (Magnitude: {risk.magnitude})
                </Typography>
                <Typography variant="body2" sx={{ color: "#757575", fontWeight: "bold", mt: 1 }}>
                  Genotype: {risk.genotype}
                </Typography>
                <Typography variant="body1" sx={{ color: "#000", mt: 1 }}>
                  Impact: {risk.impact}
                </Typography>
                <Typography variant="body2" sx={{ color: "#2E7D32", fontWeight: "bold", mt: 1 }}>
                  Recommendation: {risk.recommendation}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Paper>
    </Container>
  );
};

export default GeneticRiskReport;
