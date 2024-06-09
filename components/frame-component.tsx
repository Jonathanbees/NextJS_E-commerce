import type { NextPage } from "next";
import FormGroup1 from "./form-group1";
import FormGroup from "./form-group";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.formGroupParent, className].join(" ")}>
      <FormGroup1 formControl="Username *" email="Username * " />
      <FormGroup
        formControl="Email address *"
        emailPlaceholder="Email * "
        formText="We'll never share your email with anyone else.
"
      />
      <FormGroup1
        formControl="Contact number"
        email="Contact number * "
        propTop="162px"
        propMinWidth="unset"
        propDisplay="unset"
        propWidth="154px"
        propMinWidth1="129px"
      />
      <FormGroup
        formControl="Address"
        emailPlaceholder="Address * "
        formText="We'll never share your Adress with anyone else.
"
        propTop="162px"
        propDisplay="inline-block"
        propMinWidth="74px"
        propWidth="76px"
        propWidth1="68px"
      />
      <FormGroup1
        formControl="Password"
        email="Password * "
        propTop="324px"
        propMinWidth="88px"
        propDisplay="inline-block"
        propWidth="90px"
        propMinWidth1="79px"
      />
      <FormGroup
        formControl="Repeat Password"
        emailPlaceholder="Repeat password * "
        formText="Make sure you have the same password
"
        propTop="324px"
        propDisplay="unset"
        propMinWidth="unset"
        propWidth="160px"
        propWidth1="134px"
      />
    </div>
  );
};

export default FrameComponent;
