
import { useState } from "react";
import axios from "axios";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ApplicationForm() {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});
  const [appliedDate, setAppliedDate] = useState("");
  const [status, setStatus] = useState("Applied");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!jobTitle.trim()) {
      newErrors.jobTitle = "Job title is required";
    }

    if (!location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!appliedDate) {
      newErrors.appliedDate = "Applied date is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const application = {
      company,
      jobTitle,
      location,
      appliedDate,
      status,
      notes,
    };

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8081/api/applications",
        application
      );

      const savedApplication = response.data;

      alert(
        "Application saved successfully!\n" +
        "Application ID: " + savedApplication.id
      );

      setCompany("");
      setJobTitle("");
      setLocation("");
      setAppliedDate("");
      setStatus("Applied");
      setNotes("");
      setErrors({});
    } catch (error) {
      console.error("Error saving application:", error);

      alert(
        "Could not save the application. Check whether the backend is running."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: 3, maxWidth: 500 }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        Add Application
      </Typography>

      <TextField
        label="Company Name"
        fullWidth
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        error={Boolean(errors.company)}
        helperText={errors.company || ""}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Job Title"
        fullWidth
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        error={Boolean(errors.jobTitle)}
        helperText={errors.jobTitle || ""}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Location"
        fullWidth
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        error={Boolean(errors.location)}
        helperText={errors.location || ""}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Applied Date"
        type="date"
        fullWidth
        value={appliedDate}
        onChange={(e) => setAppliedDate(e.target.value)}
        error={Boolean(errors.appliedDate)}
        helperText={errors.appliedDate || ""}
        sx={{ mb: 2 }}
        slotProps={{
          inputLabel: { shrink: true },
        }}
      />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Status</InputLabel>

        <Select
          value={status}
          label="Status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="Applied">Applied</MenuItem>
          <MenuItem value="Interview">Interview</MenuItem>
          <MenuItem value="Offer">Offer</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Notes (Optional)"
        fullWidth
        multiline
        rows={3}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        type="submit"
        variant="contained"
        disabled={loading}
      >
        {loading ? "Saving..." : "Submit"}
      </Button>
    </Box>
  );
}

export default ApplicationForm;
