
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ApplicationCard from "./ApplicationCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/applications")
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => {
        console.error("Error fetching applications:", error);
      });
  }, []);

  async function handleDelete(id) {
    try {
      await axios.delete(
        `http://localhost:8081/api/applications/${id}`
      );

      setApplications((previousApplications) =>
        previousApplications.filter(
          (application) => application.id !== id
        )
      );
    } catch (error) {
      console.error("Error deleting application:", error);
      alert("Failed to delete application.");
    }
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        My Applications
      </Typography>

      {applications.map((application) => (
        <ApplicationCard
          key={application.id}
          application={application}
          onDelete={() => handleDelete(application.id)}
        />
      ))}
    </Box>
  );
}

export default Applications;
