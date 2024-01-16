import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { IBlueButtonsProps } from './IBlueButtonsProps';
import styles from './BlueButtons.module.scss';

export default class BlueButtons extends React.Component<IBlueButtonsProps, {}> {
  public render(): React.ReactElement<IBlueButtonsProps> {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
          <button type="button" className="btn w-100 requestBtn" style={{ backgroundColor: "#59b6f3", color: "#fff", border: "none", height: "120%" }}>
  <img className={styles.icon} height="16px" width="16px" src={require('../assets/icons/pencil.png')} alt="Pencil Icon" style={{ marginRight: '4px' }} />
  Request Forms
</button>
          </div>
          <div className="col">
            <button type="button" className="btn w-100 appBtn" style={{ backgroundColor: "#4091e2", color: "#fff", border: "none", height: "120%" }}>   <img className={styles.icon} height="16px" width="16px" src={require('../assets/icons/sparkling.png')} alt="Pencil Icon" style={{ marginRight: '4px' }} />
 Applications</button>
          </div>
          <div className="col">
            <button type="button" className="btn  w-100 templateBtn" style={{ backgroundColor: "#4574d0", color: "#fff", border: "none", height: "120%" }}>  <img className={styles.icon} height="16px" width="16px" src={require('../assets/icons/pencil.png')} alt="Pencil Icon" style={{ marginRight: '4px' }} />
 Templates</button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <button type="button" className="btn  w-100 projectBtn" style={{ backgroundColor: "#368cf1", color: "#fff", border: "none", height: "120%" }}>  <img className={styles.icon} height="16px" width="16px" src={require('../assets/icons/lamp.png')} alt="Pencil Icon" style={{ marginRight: '4px' }} />
 Projects</button>
          </div>
          <div className="col">
            <button type="button" className="btn  w-100 employeeBtn" style={{ backgroundColor: "#4091e2", color: "#fff", border: "none", height: "120%" }}>  <img className={styles.icon} height="16px" width="16px" src={require('../assets/icons/protection.png')} alt="Pencil Icon" style={{ marginRight: '4px' }} />
 Employee Handbook</button>
          </div>
          <div className="col">
            <button type="button" className="btn  w-100 policiesBtn" style={{ backgroundColor: "#59b6f3", color: "#fff", border: "none", height: "120%" }}>  <img className={styles.icon} height="16px" width="16px" src={require('../assets/icons/protection.png')} alt="Pencil Icon" style={{ marginRight: '4px' }} />
 Policies & Procedures</button>
          </div>
        </div>
      </div>
    );
  }
}
