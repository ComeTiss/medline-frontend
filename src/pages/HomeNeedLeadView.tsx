import React from "react";
import { makeStyles, Box, Button } from "@material-ui/core";
import doctorMaskImage from "../images/homepage_doctor_mask.jpg";
import { GET_NEEDS, GET_LEADS } from "../service/apollo/queries";
import { useQuery } from "@apollo/react-hooks";

const useStyles = makeStyles(() => ({
  box: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: `url(${doctorMaskImage}) no-repeat center center `,
    backgroundSize: "cover",
    height: "100vh"
  },
  box_table: {
    height: "45vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "#293d6c",
    paddingBottom: "25px",
    minWidth: "415px",
    minHeight: "280px"
  },
  table: {
    width: "80%"
  },
  button: {
    fontWeight: 400,
    width: "12%",
    margin: "20px 0px 10px 0px"
  },
  header: {
    textAlign: "start",
    fontWeight: 500,
    padding: "5px 0px"
  },
  tr: {
    color: "#6a6a6a",
    fontWeight: 400,
    marginTop: "20px"
  },
  td: {
    padding: "2px"
  },
  h3: {
    fontSize: "18px"
  },
  link: {
    color: "#293d6c"
  }
}));

const HomeNeedLeadView = () => {
  const { data: needsData } = useQuery(GET_NEEDS, {
    variables: {
      request: {
        options: {
          page: 1,
          limit: 5
        }
      }
    },
    fetchPolicy: "cache-and-network"
  });

  const { data: leadsData } = useQuery(GET_LEADS, {
    variables: {
      request: {
        options: {
          page: 1,
          limit: 5
        }
      }
    },
    fetchPolicy: "cache-and-network"
  });

  const needs = needsData?.getAllNeeds?.needs || [];
  const leads = leadsData?.getAllLeads?.leads || [];

  const styles = useStyles();

  const needRow = (need: any) => (
    <tr className={styles.tr} key={need.id}>
      <td className={styles.td}>{need.urgencyLevel}</td>
      <td className={styles.td}>{need.itemName}</td>
      <td className={styles.td}>{addCommaSeparators(need.quantity)}</td>
      <td className={styles.td}>{switchNumberToString(need.budget, "need")}</td>
      <td className={styles.td}>{need.specifications}</td>
      <td className={styles.td}>{need.createdAt}</td>
      <td>
        <a className={styles.link} href={`needs/${need.id}`}>
          More
        </a>
      </td>
    </tr>
  );

  const leadRow = (lead: any) => (
    <tr className={styles.tr} key={lead.id}>
      <td className={styles.td}>{lead.itemName}</td>
      <td className={styles.td}>{lead.specifications}</td>
      <td className={styles.td}>{addCommaSeparators(lead.quantity)}</td>
      <td className={styles.td}>{switchNumberToString(lead.cost, "lead")}</td>
      <td className={styles.td}>{lead.availableAt}</td>
      <td className={styles.td}>{lead.createdAt}</td>
      <td>
        <a className={styles.link} href={`leads/${lead.id}`}>
          More
        </a>
      </td>
    </tr>
  );

  const noDataRow = () => (
    <tr>
      <td>Nothing to display for now</td>
    </tr>
  );

  const addCommaSeparators = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const switchNumberToString = (number: number, str: string) => {
    if (number <= 0 && str === "need") {
      return "Need Donate";
    } else if (number <= 0 && str === "lead") {
      return "Donate";
    } else if (number > 0 && str === "need") {
      return "Can Buy";
    } else if (number > 0 && str === "lead") {
      return "Sell";
    }
  };

  return (
    <>
      <Box className={styles.box}>
        <Box className={styles.box_table}>
          <h3 className={styles.h3}>VIEW NEEDS</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.header}>URGENCY</th>
                <th className={styles.header}>NEED</th>
                <th className={styles.header}>QTY</th>
                <th className={styles.header}>DONATE/BUY</th>
                <th className={styles.header}>CITY</th>
                <th className={styles.header}>NAME</th>
                <th className={styles.header}></th>
              </tr>
            </thead>
            <tbody>{needs.length > 0 ? needs.map(needRow) : noDataRow()}</tbody>
          </table>
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            href="/needs"
          >
            VIEW ALL
          </Button>
        </Box>
        <Box className={styles.box_table}>
          <h3 className={styles.h3}>VIEW LEADS</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.header}>AVAILABLE</th>
                <th className={styles.header}>TYPE</th>
                <th className={styles.header}>QTY</th>
                <th className={styles.header}>DONATE/SELL</th>
                <th className={styles.header}>CITY</th>
                <th className={styles.header}>NAME</th>
              </tr>
            </thead>
            <tbody>{leads.length > 0 ? leads.map(leadRow) : noDataRow()}</tbody>
          </table>
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            href="/leads"
          >
            VIEW ALL
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HomeNeedLeadView;
