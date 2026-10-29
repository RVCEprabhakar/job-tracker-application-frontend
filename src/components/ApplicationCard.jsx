
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

function ApplicationCard({ application, onDelete}) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {application.company}
        </Typography>

        <Typography>
          {application.jobTitle}
        </Typography>

        <Typography>
          {application.location}
        </Typography>

        <Typography>
          Applied Date: {application.appliedDate}
        </Typography>

        <Chip
          label={application.status}
          color="primary"
          sx={{ mt: 1 }}
        />

        <Typography sx={{ mt: 1 }}>
          Notes: {application.notes}
        </Typography>

        <div>
          <Button
            variant="outlined"
            size="small"
            sx={{ mt: 2, mr: 1 }}
          >
            Edit
          </Button>

          <Button
            variant="outlined"
            color="error"
            size="small"
            sx={{ mt: 2 }}
            onClick={onDelete}
          >
            Delete
          </Button>
          
        </div>
      </CardContent>
    </Card>
  );
}

export default ApplicationCard;
