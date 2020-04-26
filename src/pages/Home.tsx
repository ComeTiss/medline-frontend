import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import NavBar from "../components/navigation/NavBar";
import Lead from "../service/models/lead.model";
import Need from "../service/models/need.model";
import CreateOrEditNeedModal from "../components/needs-and-leads/CreateOrEditNeedModal";
import CreateOrEditLeadModal from "../components/needs-and-leads/CreateOrEditLeadModal";
import { MUTATE_NEED } from "../service/apollo/mutations";

import heartImage from "../images/homepage_heart.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  head: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `url(${heartImage}) no-repeat center center`,
    backgroundSize: "cover",
    height: "50vh",
    width: "100vw"
  },
  container: {
    display: "flex",
    paddingTop: "25px",
    flexWrap: "wrap"
  },
  submitNeed: {
   width: "45vw",
   height: "25vh",
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   backgroundColor: "#c9c9d5",
   textAlign: "center",
   minWidth: "210px",
   minHeight: "155px",
   marginTop: "10px"
  },
  submitLead: {
    width: "45vw",
    height: "25vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#c9c9d5",
    textAlign: "center",
    minWidth: "210px",
    minHeight: "155px",
    marginTop: "10px"
  },
  text: {
    marginBottom: "15px",
    fontFamily: "Roboto Helvetica Arial sans- serif",
    fontWeight: 600
  },
  textHead: {
    color: "white",
    textAlign: "center",
    width: "30vw",
    fontWeight:500,
    fontSize: "16px",
    lineHeight: "26px",
  },
  submit: {
    textAlign: "center",
    bottom: theme.spacing(5)
  },
  title: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(1)
  },
  searchTool: {
    marginBottom: theme.spacing(1)
  },
  modal: {
    outline: "none"
  }
}));

function Home() {
  const styles = useStyles();
  const [showNeedSubmitModal, setShowNeedSubmitModal] = useState(false);
  const [showLeadSubmitModal, setShowLeadSubmitModal] = useState(false);
  const [error, setError] = useState("");
  const [mutateNeed] = useMutation(MUTATE_NEED);

  const onNeedSubmit = (need: Need) => {
    mutateNeed({
      variables: { request: need },
    })
      .then(() => setShowNeedSubmitModal(false))
      .catch(() => setError("Internal server error, please try again later"));
  };

  const onLeadSubmit = (lead: Lead) => {
    mutateNeed({
      variables: { request: lead },
    })
      .then(() => setShowLeadSubmitModal(false))
      .catch(() => setError("Internal server error, please try again later"));
  };

  return (
    <>
      <NavBar />
      <Container className={styles.head}>
        <Container className={styles.textHead} >
           Aggregating global demand & supply of medical supplies & equipment to connect needs with supply leads. STAT.
        </Container >
      </Container>
      <Container className={styles.container}>
        <Container className={styles.submitNeed}>
          <Container className={styles.text} >On the front-lines flighting COVID-19 and in need of medical supplies & equipment?</Container >
          <Container className={styles.submit}>
            <Button
              onClick={() => setShowNeedSubmitModal(true)}
              variant="contained"
              color="primary"
            >
              POST NEEDS
          </Button>
          </Container>
          <CreateOrEditNeedModal
            title="Create Need"
            onSubmit={onNeedSubmit}
            submitError={error}
            onClose={() => setShowNeedSubmitModal(false)}
            isOpen={showNeedSubmitModal}
          />
        </Container>

        <Container className={styles.submitLead}>
          <Container className={styles.text} >Have access to medical supplies & equipment needed by healthcare professionals?</Container >
          <Container className={styles.submit}>
            <Button
              onClick={() => setShowLeadSubmitModal(true)}
              variant="contained"
              color="primary"
            >
              POST SUPPLIES
          </Button>
          </Container>
          <CreateOrEditLeadModal
            title="Create Lead"
            onSubmit={onLeadSubmit}
            submitError={error}
            onClose={() => setShowLeadSubmitModal(false)}
            isOpen={showLeadSubmitModal}
          />
          </Container>
        </Container>
    </>   
  );
}

export default Home;
