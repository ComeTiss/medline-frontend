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

import { DELETE_NEEDS } from "../../service/apollo/mutations";
import { GET_NEEDS } from "../../service/apollo/queries";
import Need from "../../service/models/need.model";
import CreateOrEditNeedModal from "./CreateOrEditNeedModal";

type Props = {
  needs: Array<Need | null>;
  onSubmit: (data: any) => void;
  submitError: string;
  userId?: number;
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
    format: (value: number) => moment(value, "x").format("YYYY-MM-DD")
  },
  {
    id: "budget",
    label: "Budget ($)",
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [selectedNeed, setSelectedNeed] = useState(new Need({}));
  const { needs, onSubmit, submitError, userId } = props;
  const styles = useStyles();
  const [deleteMutation] = useMutation(DELETE_NEEDS);

  function onDeleteNeed(id: string) {
    deleteMutation({
      variables: { request: { ids: [id] } },
      refetchQueries: [
        {
          query: GET_NEEDS,
          variables: {
            request: { filters: { authorId: userId } }
          }
        }
      ]
    });
  }

  function onMutateNeed(data: any) {
    onSubmit({
      id: selectedNeed.id,
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

  function onEditNeed(need: Need) {
    setSelectedNeed(need);
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
                          onClick={() => onEditNeed(need)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() => onDeleteNeed(need.id)}
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
        count={needs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <CreateOrEditNeedModal
        title="Edit Need"
        onSubmit={onMutateNeed}
        submitError={submitError}
        onClose={() => setShowSubmitModal(false)}
        isOpen={showSubmitModal}
        need={selectedNeed}
      />
    </Paper>
  );
}

export default NeedsTable;
