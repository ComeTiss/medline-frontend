import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import User from "../../service/models/user.model";
import MutableField from "./MutableField";
import Organization, {
  OrganizationInput
} from "../../service/models/organization.model";
import { useMutation } from "@apollo/react-hooks";
import { GET_USERS } from "../../service/apollo/queries";
import { MUTATE_ORGANIZATION } from "../../service/apollo/mutations";

const useStyles = makeStyles(theme => ({
  container: {
    margin: "auto",
    marginTop: theme.spacing(5),
    height: "90%",
    width: "60%",
    color: "rgba(0, 0, 0, 0.87)"
  },
  header: {
    marginBottom: theme.spacing(4)
  },
  additionalInfo: {
    marginTop: theme.spacing(2)
  },
  greenFlagText: {
    marginTop: theme.spacing(3),
    fontSize: "14px"
  }
}));

type Props = {
  user: User;
};

const fields = [
  {
    title: "Organization Name",
    fieldName: "name"
  },
  {
    title: "Industry / Activity",
    fieldName: "activity"
  },
  {
    title: "Address",
    fieldName: "address"
  },
  {
    title: "City",
    fieldName: "city"
  },
  {
    title: "Country",
    fieldName: "country"
  }
];

function UserProfile(props: Props) {
  const styles = useStyles();
  const { user } = props;
  const { organization, id: userId } = user;
  const [mutateLead] = useMutation(MUTATE_ORGANIZATION);
  const onSubmit = (org: Organization) => {
    return mutateLead({
      variables: { request: new OrganizationInput(org) },
      refetchQueries: [
        {
          query: GET_USERS,
          variables: {
            request: { filters: { userId } }
          }
        }
      ]
    });
  };

  if (!user) return null;

  return (
    <div className={styles.container}>
      <Typography variant="h5" className={styles.header}>
        Organization info
      </Typography>
      {fields.map(it => (
        <MutableField
          key={it.title}
          payload={organization}
          title={it.title}
          fieldName={it.fieldName}
          onSubmit={onSubmit}
        />
      ))}
      {/* TODO: Add form + upload documents */}
      {/* <TextField
        disabled
        fullWidth
        variant="outlined"
        defaultValue=" "
        label="Additional information such as certifications"
        className={styles.additionalInfo}
      />
      <Typography>
        Upload pictures from your institution and past successful deliveries
        (jpeg, png)
      </Typography>
      <Typography>
        Upload additional files supporting your organization, such as
        certificates (pdf)
      </Typography>
      <Typography className={styles.greenFlagText}>
        To verify your organization and get a Green Flag tag highlight by your
        profile and listing: fill and submit the form regarding a successful
        shipment which has gone through.
      </Typography> */}
    </div>
  );
}

export default UserProfile;
