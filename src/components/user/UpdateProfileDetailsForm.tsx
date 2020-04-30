import React from "react";
import User from "../../service/models/user.model";
import MutableField from "./MutableField";

type Props = {
  user: User;
  onSubmit: (data: any) => Promise<any>;
};

const fields = [
  {
    title: "Last (Family) Name",
    fieldName: "lastName"
  },
  {
    title: "First (Given) Name",
    fieldName: "firstName"
  },
  {
    title: "Job Title / Function",
    fieldName: "functionTitle"
  },
  {
    title: "Display different Email Address",
    fieldName: "displayEmail"
  },
  {
    title: "Phone Number",
    fieldName: "phoneNumber"
  },
  {
    title: "WhatsApp Number",
    fieldName: "whatsapp"
  },
  {
    title: "WeChat ID",
    fieldName: "wechat"
  },
  {
    title: "Skype ID",
    fieldName: "skype"
  },
  {
    title: "Zoom ID",
    fieldName: "zoom"
  }
];

function UpdateProfileDetailsForm(props: Props) {
  const { user, onSubmit } = props;

  return (
    <>
      {fields.map(it => (
        <MutableField
          key={it.title}
          payload={user}
          title={it.title}
          fieldName={it.fieldName}
          onSubmit={onSubmit}
        />
      ))}
    </>
  );
}

export default UpdateProfileDetailsForm;
