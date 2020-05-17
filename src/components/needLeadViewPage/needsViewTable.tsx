import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { makeStyles, Box, Container } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { GET_NEEDS } from "../../service/apollo/queries";
import Need from "../../service/models/need.model";

type Props = {
  page: number;
};

function NeedsViewTable() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);
  const [needs, setNeeds] = useState([]);
  const [filterStr, setFilterStr] = useState("");

  const useStyles = makeStyles(() => ({
    outerTable: {
      width: "100%",
      height: "80%",
      marginBottom: "20px",
      minWidth: "800px",
      position: "relative"
    },
    boxNeed: {
      display: "flex",
      flexDirection: "column",
      background: "rgba(255,255,255,0.85)",
      height: "60vh",
      padding: "20px 35px 35px 35px",
      minWidth: "875px",
      minHeight: "575px"
    },
    needHeader: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      color: "#26396a"
    },
    headerText: {
      fontFamily: "inherit",
      fontWeight: 400,
      fontSize: "20px"
    },
    inputBox: {
      display: "flex",
      width: "40%",
      height: "25px",
      justifyContent: "space-between",
      alignItems: "center",
      border: "1px solid #c3c3c3",
      background: "white",
      paddingRight: "2px",
      marginRight: "0px"
    },
    input: {
      width: "100%",
      border: "none",
      height: "23px",
      outline: "none"
    },
    searchIcon: {
      color: "#616161"
    },
    table: {
      width: "100%",
      minWidth: "915px",
      padding: "10px"
    },
    innerTable: {
      width: "100%",
      height: "42vh",
      minWidth: "800px",
      minHeight: "285",
      border: "1px solid #c3c3c3",
      marginTop: "5px",
      fontSize: "13px",
      fontFamily: "sans - serif",
      fontWeight: 400
    },
    header: {
      color: "#26396a",
      textAlign: "start",
      fontWeight: 400,
      transform: "scaleY(0.9)"
    },
    headerDiv: {
      display: "flex",
      whiteSpace: "nowrap"
    },
    td: {
      padding: "0px 10px 15px 5px",
      transform: "scaleY(0.9)",
      fontWeight: 400
    },
    bodyBox: {
      color: "#77797a",
      verticalAlign: "top"
    },
    footer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#5a5a5a"
    },
    arrowIcon: {
      cursor: "pointer"
    },
    tableCustomBorder: {
      border: "1px solid #86888b",
      position: "absolute",
      width: "100%",
      height: "calc(100% - 35px)",
      top: "35px",
      minWidth: "908px"
    }
  }));
  const styles = useStyles();

  const { data: needsData } = useQuery(GET_NEEDS, {
    variables: {
      request: {
        options: {
          page: page,
          limit: 10
        },
        filters: {}
      }
    },
    fetchPolicy: "cache-and-network"
  });

  const { data: filteredNeeds } = useQuery(GET_NEEDS, {
    variables: {
      request: {}
    },
    fetchPolicy: "cache-and-network"
  });

  useEffect(() => {
    if (filterStr !== "") {
      let totalNeeds = filteredNeeds?.getAllNeeds?.needs || [];
      totalNeeds = totalNeeds
        .filter((need: any) => {
          return need.itemName.includes(filterStr);
        })
        .slice(0, 10);
      setNeeds(totalNeeds);
      setTotalPage(1);
    } else {
      const totalNeeds = filteredNeeds?.getAllNeeds?.needs || [];
      const needs = needsData?.getAllNeeds?.needs || [];
      let totalPages = Math.ceil(totalNeeds.length / 10);
      setNeeds(needs);
      setTotalPage(totalPages);
    }
  }, [needsData, filterStr, totalPages, filteredNeeds]);

  function searchNeeds(e: any) {
    setFilterStr(e.target.value);
  }

  const needRow = (need: Need) => (
    <tr key={need.id}>
      <td className={styles.td}>{need.urgencyLevel}</td>
      <td className={styles.td}>{need.itemName}</td>
      <td className={styles.td}>{need.authorId}</td>
      <td className={styles.td}>{need.authorId}</td>
      <td className={styles.td}>{need.specifications}</td>
      <td className={styles.td}>{addCommaSeparators(need.quantity)}</td>
      <td className={styles.td}>{need.createdAt}</td>
      <td className={styles.td}>{switchNumberToString(need.budget, "need")}</td>
    </tr>
  );

  const changePageHandle = (dir: String) => {
    if (dir === "left" && page > 1) {
      setPage(page - 1);
    } else if (dir === "right" && page < totalPages) {
      setPage(page + 1);
    }
  };

  const noDataRow = () => (
    <tr>
      <td></td>
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
      <Box className={styles.boxNeed}>
        <Box className={styles.needHeader}>
          <h1 className={styles.headerText}>NEEDS</h1>
          <Container className={styles.inputBox}>
            <input
              className={styles.input}
              type="text"
              onChange={searchNeeds}
            />
            <SearchIcon className={styles.searchIcon} />
          </Container>
        </Box>
        <Box className={styles.outerTable}>
          <div className={styles.tableCustomBorder}></div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.header}>
                  <div className={styles.headerDiv}>
                    URGENCY
                    <ArrowDropDownIcon />
                  </div>
                </th>
                <th className={styles.header}>
                  <div className={styles.headerDiv}>
                    ITEMS
                    <ArrowDropDownIcon />
                  </div>
                </th>
                <th className={styles.header}>
                  <div className={styles.headerDiv}>
                    POSTED BY
                    <ArrowDropDownIcon />
                  </div>
                </th>
                <th className={styles.header}>
                  <div className={styles.headerDiv}>
                    COUNTRY
                    <ArrowDropDownIcon />
                  </div>
                </th>
                <th className={styles.header}>
                  <div className={styles.headerDiv}>
                    CITY
                    <ArrowDropDownIcon />
                  </div>
                </th>
                <th className={styles.header}>
                  <div className={styles.headerDiv}>
                    QTY
                    <ArrowDropDownIcon />
                  </div>
                </th>
                <th className={styles.header}>
                  <div className={styles.headerDiv}>
                    DATE
                    <ArrowDropDownIcon />
                  </div>
                </th>
                <th className={styles.header}>
                  <div className={styles.headerDiv}>
                    BUDGET
                    <ArrowDropDownIcon />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className={styles.bodyBox}>
              {needs.length > 0 ? needs.map(needRow) : noDataRow()}
            </tbody>
          </table>
        </Box>
        <Container className={styles.footer}>
          <ArrowLeftIcon
            className={styles.arrowIcon}
            onClick={() => changePageHandle("left")}
          />
          {page} / {totalPages}
          <ArrowRightIcon
            className={styles.arrowIcon}
            onClick={() => changePageHandle("right")}
          />
        </Container>
      </Box>
    </>
  );
}

export default NeedsViewTable;
