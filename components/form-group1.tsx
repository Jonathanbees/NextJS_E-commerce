import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./form-group1.module.css";

export type FormGroup1Type = {
  className?: string;
  formControl?: string;
  email?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propWidth?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const FormGroup1: NextPage<FormGroup1Type> = ({
  className = "",
  formControl,
  email,
  propTop,
  propMinWidth,
  propDisplay,
  propWidth,
  propMinWidth1,
}) => {
  const formGroupStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const formControlStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const emailStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={[styles.formGroup, className].join(" ")}
      style={formGroupStyle}
    >
      <div className={styles.formControl} style={formControlStyle}>
        {formControl}
      </div>
      <div
        className={styles.formControlInputStyle1Wrapper}
        style={frameDivStyle}
      >
        <div className={styles.formControlInputStyle1}>
          <div className={styles.inputformControl}>
            <div className={styles.email} style={emailStyle}>
              {email}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.formText}>
        We'll never share your email with anyone else.
      </div>
    </div>
  );
};

export default FormGroup1;
