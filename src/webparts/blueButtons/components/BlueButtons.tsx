import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IBlueButtonsProps } from './IBlueButtonsProps';
import styles from './BlueButtons.module.scss';

export default class BlueButtons extends React.Component<IBlueButtonsProps, {}> {
  public render(): React.ReactElement<IBlueButtonsProps> {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4 mb-3">
            <a href={this.props.requestFormsLink} className={`btn w-100 ${styles.requestBtn}`} style={{ backgroundColor: "#59b6f3", color: "#fff", border: "none", height: "120%"}}>
              <img
                className={styles.icon}
                height="16px" width="16px"
                src={require('../assets/icons/pencil.png')}
                alt="Pencil Icon"
                style={{ marginRight: '4px' }}
              />
              Request Forms
            </a>
          </div>
          <div className="col-md-4 mb-3">
            <a href={this.props.applicationsLink} className={`btn w-100 ${styles.appBtn}`} style={{ backgroundColor: "#4091e2", color: "#fff", border: "none", height: "120%" }}>
              <img
                className={styles.icon}
                height="16px" width="16px"
                src={require('../assets/icons/sparkling.png')}
                alt="Sparkling Icon"
                style={{ marginRight: '4px' }}
              />
              Applications
            </a>
          </div>
          <div className="col-md-4 mb-3">
            <a href={this.props.templatesLink} className={`btn w-100 ${styles.templateBtn}`} style={{ backgroundColor: "#4574d0", color: "#fff", border: "none", height: "120%" }}>
              <img
                className={styles.icon}
                height="16px" width="16px"
                src={require('../assets/icons/pencil.png')}
                alt="Pencil Icon"
                style={{ marginRight: '4px' }}
              />
              Templates
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <a href={this.props.projectsLink} className={`btn w-100 ${styles.projectBtn}`} style={{ backgroundColor: "#368cf1", color: "#fff", border: "none", height: "120%" }}>
              <img
                className={styles.icon}
                height="16px" width="16px"
                src={require('../assets/icons/lamp.png')}
                alt="Lamp Icon"
                style={{ marginRight: '4px' }}
              />
              Projects
            </a>
          </div>
          <div className="col-md-4 mb-3">
            <a href={this.props.employeeHandbookLink} className={`btn w-100 ${styles.employeeBtn}`} style={{ backgroundColor: "#4091e2", color: "#fff", border: "none", height: "120%" }}>
              <img
                className={styles.icon}
                height="16px" width="16px"
                src={require('../assets/icons/protection.png')}
                alt="Protection Icon"
                style={{ marginRight: '4px' }}
              />
              Employee Handbook
            </a>
          </div>
          <div className="col-md-4 mb-3">
            <a href={this.props.policiesLink} className={`btn w-100 ${styles.policiesBtn}`} style={{ backgroundColor: "#59b6f3", color: "#fff", border: "none", height: "120%" }}>
              <img
                className={styles.icon}
                height="16px" width="16px"
                src={require('../assets/icons/protection.png')}
                alt="Protection Icon"
                style={{ marginRight: '4px' }}
              />
              Policies & Procedures
            </a>
          </div>
        </div>
      </div>
    );
  }
}
