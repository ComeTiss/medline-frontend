import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Backspace, Edit } from "@material-ui/icons";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from "@material-ui/core";

import Need from "../../service/models/need.model";

type Props = {
  needs: Array<Need | null>;
};

interface Column {
  id: "urgencyLevel" | "itemName" | "quantity" | "createdAt" | "budget";
  label: string;
  minWidth?: number;
  align?: "left";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "urgencyLevel", label: "Urgency", minWidth: 50 },
  { id: "itemName", label: "Item", minWidth: 230 },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 70,
    align: "left",
    format: (value: number) => value.toLocaleString()
  },
  {
    id: "createdAt",
    label: "Date",
    minWidth: 110,
    align: "left",
    format: (value: number) => value.toLocaleString()
  },
  {
    id: "budget",
    label: "Budget",
    minWidth: 90,
    align: "left",
    format: (value: number) => value.toFixed(2)
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  container: {
    width: "97%",
    maxHeight: 345,
    margin: "auto"
  },
  action: {
    paddingLeft: theme.spacing(1),
    maxWidth: 80
  },
  actionButtons: {
    padding: 0
  },
  row: {
    maxHeight: 100
  }
}));

function NeedsTable(props: Props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { needs } = props;
  const styles = useStyles();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper elevation={0} className={styles.root}>
      <TableContainer className={styles.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell className={styles.action}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {needs
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(need => {
                if (!need) return null;
                return (
                  <TableRow
                    hover
                    className={styles.row}
                    role="checkbox"
                    tabIndex={-1}
                    key={need.id}
                  >
                    {columns.map(column => {
                      const value = need[column.id];
                      console.log(value);
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell className={styles.actionButtons}>
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() => console.log("clicked edit")}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() => console.log("clicked delete")}
                      >
                        <Backspace />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className={styles.container}
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={needs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default NeedsTable;
