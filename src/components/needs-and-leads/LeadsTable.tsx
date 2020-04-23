import React, { useState } from "react";
import moment from "moment";
import { useMutation } from "@apollo/react-hooks";
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

import { DELETE_LEADS } from "../../service/apollo/mutations";
import { GET_LEADS } from "../../service/apollo/queries";
import Lead from "../../service/models/lead.model";
import CreateOrEditLeadModal from "./CreateOrEditLeadModal";

type Props = {
  leads: Array<Lead | null>;
  onSubmit: (data: any) => void;
  submitError: string;
  userId?: number;
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
    format: (value: number) => moment(value, "x").format("YYYY-MM-DD")
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
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState(new Lead({}));
  const { leads, onSubmit, submitError, userId } = props;
  const styles = useStyles();
  const [deleteMutation] = useMutation(DELETE_LEADS);

  function onDeleteLead(id: string) {
    deleteMutation({
      variables: { request: { ids: [id] } },
      refetchQueries: [
        {
          query: GET_LEADS,
          variables: {
            request: { filters: { authorId: userId } }
          }
        }
      ]
    });
  }

  function onMutateLead(data: any) {
    onSubmit({
      id: selectedLead.id,
      ...data
    });
    setShowSubmitModal(false);
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function onEditLead(lead: Lead) {
    setSelectedLead(lead);
    setShowSubmitModal(true);
  }

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
              {userId && (
                <TableCell className={styles.action}>Action</TableCell>
              )}
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
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && !isNaN(Number(value))
                            ? column.format(Number(value))
                            : value}
                        </TableCell>
                      );
                    })}
                    {userId && (
                      <TableCell className={styles.actionButtons}>
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() => onEditLead(lead)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() => onDeleteLead(lead.id)}
                        >
                          <DelIcon />
                        </IconButton>
                      </TableCell>
                    )}
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
      <CreateOrEditLeadModal
        title="Edit Lead"
        onSubmit={onMutateLead}
        submitError={submitError}
        onClose={() => setShowSubmitModal(false)}
        isOpen={showSubmitModal}
        lead={selectedLead}
      />
    </Paper>
  );
}

export default LeadsTable;
