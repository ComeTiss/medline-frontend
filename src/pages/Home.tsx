import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { isAuthenticated } from "../utils/authentication/AuthUtils";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import NavBar from "../components/navigation/NavBar";
import Lead from "../service/models/lead.model";
import Need from "../service/models/need.model";
import CreateOrEditNeedModal from "../components/needs-and-leads/CreateOrEditNeedModal";
import CreateOrEditLeadModal from "../components/needs-and-leads/CreateOrEditLeadModal";
import { MUTATE_NEED, MUTATE_LEAD } from "../service/apollo/mutations";

import heartImage from "../images/homepage_heart.jpg";
import maskImage from "../images/homepage_mask.jpg";
import threePeopleImage from "../images/homepage_three_people.jpg";

import HomeNeedLeadView from "./HomeNeedLeadView";
import Footer from "../components/footer/Footer";

const NO_MODAL = "";
const MODAL_LEAD_OPEN = "modal_lead_open";
const MODAL_NEED_OPEN = "modal_need_open";
const LOGIN_ROUTE = "/login";

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
    width: "100%",
    minHeight: "260px"
  },
  container: {
    display: "flex",
    paddingTop: "25px",
    flexWrap: "wrap"
  },
  submitPanel: {
    width: "45vw",
    height: "22vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    minWidth: "210px",
    minHeight: "200px",
    marginTop: "10px",
    color: "#5b5b5b",
    fontSize: "17px"
  },
  submitNeed: {
    background: `linear-gradient(rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), url(${threePeopleImage}) no-repeat center center `,
    backgroundSize: "cover"
  },
  submitLead: {
    background: `linear-gradient(rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), url(${maskImage}) no-repeat center center `,
    backgroundSize: "cover"
  },
  text: {
    marginBottom: "15px",
    fontWeight: 600
  },
  textHead: {
    color: "white",
    textAlign: "center",
    width: "30vw",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "26px",
    minWidth: "140px"
  },
  submit: {
    textAlign: "center",
    bottom: theme.spacing(5)
  },
  button: {
    fontWeight: 400
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
  const cookies = useCookies();
  const isUserLoggedIn = isAuthenticated(cookies[0]);
  const styles = useStyles();
  const history = useHistory();
  const [showSubmitModal, setShowSubmitModal] = useState(NO_MODAL);
  const [error, setError] = useState("");
  const [mutateNeed] = useMutation(MUTATE_NEED);
  const [mutateLead] = useMutation(MUTATE_LEAD);

  useEffect(() => {});

  const onNeedSubmit = (need: Need) => {
    mutateNeed({
      variables: { request: need }
    })
      .then(() => setShowSubmitModal(NO_MODAL))
      .catch((error: any) => {
        const errorMsg = error?.response?.data?.error;
        setError(errorMsg);
      });
  };

  const onLeadSubmit = (lead: Lead) => {
    mutateLead({
      variables: { request: lead }
    })
      .then(() => setShowSubmitModal(NO_MODAL))
      .catch((error: any) => {
        const errorMsg = error?.response?.data?.error;
        setError(errorMsg);
      });
  };

  const onModalOpenClick = (showSubmitModalValue: string) => {
    if (isUserLoggedIn) {
      setShowSubmitModal(showSubmitModalValue);
    } else {
      history.push(LOGIN_ROUTE);
    }
  };

  return (
    <>
      <NavBar />
      <Box className={styles.head}>
        <Container className={styles.textHead}>
          Aggregating global demand & supply of medical supplies & equipment to
          connect needs with supply leads. STAT.
        </Container>
      </Box>
      <Box className={styles.container}>
        <Container className={`${styles.submitPanel} ${styles.submitNeed}`}>
          <Container className={styles.text}>
            On the front-lines flighting COVID-19 and in need of medical
            supplies & equipment?
          </Container>
          <Container className={styles.submit}>
            <Button
              onClick={() => onModalOpenClick(MODAL_NEED_OPEN)}
              variant="contained"
              color="primary"
              className={styles.button}
            >
              POST NEEDS
            </Button>
          </Container>
          <CreateOrEditNeedModal
            title="Create Need"
            onSubmit={onNeedSubmit}
            submitError={error}
            onClose={() => setShowSubmitModal(NO_MODAL)}
            isOpen={showSubmitModal === MODAL_NEED_OPEN}
          />
        </Container>

        <Container className={`${styles.submitPanel} ${styles.submitLead}`}>
          <Container className={styles.text}>
            Have access to medical supplies & equipment needed by healthcare
            professionals?
          </Container>
          <Container className={styles.submit}>
            <Button
              onClick={() => onModalOpenClick(MODAL_LEAD_OPEN)}
              variant="contained"
              color="primary"
              className={styles.button}
            >
              POST SUPPLIES
            </Button>
          </Container>
          <CreateOrEditLeadModal
            title="Create Lead"
            onSubmit={onLeadSubmit}
            submitError={error}
            onClose={() => setShowSubmitModal(NO_MODAL)}
            isOpen={showSubmitModal === MODAL_LEAD_OPEN}
          />
        </Container>
      </Box>
      <HomeNeedLeadView />
      <Footer />
    </>
  );
}

export default Home;
