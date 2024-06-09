import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./form-group.module.css";

export type FormGroupType = {
  className?: string;
  formControl?: string;
  emailPlaceholder?: string;
  formText?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
};

const FormGroup: NextPage<FormGroupType> = ({
  className = "",
  formControl,
  emailPlaceholder,
  formText,
  propTop,
  propDisplay,
  propMinWidth,
  propWidth,
  propWidth1,
}) => {
  const formGroup1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const formControl1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const email1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className={[styles.formGroup, className].join(" ")}
      style={formGroup1Style}
    >
      <div className={styles.formControl} style={formControl1Style}>
        {formControl}
      </div>
      <div className={styles.formGroupInner} style={frameDiv1Style}>
        <div className={styles.formControlInputStyle1Parent}>
          <div className={styles.formControlInputStyle1}>
            <div className={styles.inputformControl}>
              <input
                className={styles.email}
                placeholder={emailPlaceholder}
                type="text"
                style={email1Style}
              />
            </div>
          </div>
          <div className={styles.formText}>{formText}</div>
        </div>
      </div>
    </div>
  );
};

export default FormGroup;
