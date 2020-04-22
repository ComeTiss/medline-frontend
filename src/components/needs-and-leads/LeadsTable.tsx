import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DelIcon from "@material-ui/icons/Backspace";
import EditIcon from "@material-ui/icons/Edit";
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

import Lead from "../../service/models/lead.model";

type Props = {
  leads: Array<Lead | null>;
};

interface Column {
  id: "itemName" | "quantity" | "availableAt" | "cost";
  label: string;
  minWidth?: number;
  align?: "left";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "itemName", label: "Item", minWidth: 230 },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 70,
    align: "left",
    format: (value: number) => value.toLocaleString()
  },
  {
    id: "availableAt",
    label: "Available Date",
    minWidth: 110,
    align: "left",
    format: (value: number) => value.toLocaleString()
  },
  {
    id: "cost",
    label: "Price",
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

function LeadsTable(props: Props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { leads } = props;
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
            {leads
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(lead => {
                if (!lead) return null;
                return (
                  <TableRow
                    hover
                    className={styles.row}
                    role="checkbox"
                    tabIndex={-1}
                    key={lead.id}
                  >
                    {columns.map(column => {
                      const value = lead[column.id];
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
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() => console.log("clicked delete")}
                      >
                        <DelIcon />
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
        count={leads.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default LeadsTable;
