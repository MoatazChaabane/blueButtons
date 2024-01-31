import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IBlueButtonsProps } from './IBlueButtonsProps';
import styles from './BlueButtons.module.scss';

export default class BlueButtons extends React.Component<IBlueButtonsProps, {}> {
  public render(): React.ReactElement<IBlueButtonsProps> {
    return (
      <div className="container mt-3">
        <div className="row">
{this.props.title1 && this.props.title1.trim() !== '' && this.props.title1.trim() !== ' ' && (
  <div className="col-md-4 mb-3">
    <a
      href={this.props.requestFormsLink}
      className={`btn w-100 ${styles.requestBtn}`}
      style={{
        backgroundColor: this.props.color1 || "#59b6f3",
        color: "#fff",
        border: "none",
        height: "120%",
      }}
    >
      <img
        className={styles.icon}
        height="16px"
        width="16px"
        src={require('../assets/icons/pencil.png')}
        alt="Pencil Icon"
        style={{ marginRight: '4px' }}
      />
      {this.props.title1}
    </a>
  </div>
)}
{this.props.title2 && this.props.title2.trim() !== '' && this.props.title2.trim() !== ' ' && (

          <div className="col-md-4 mb-3">
          <a
  href={this.props.applicationsLink}
  className={`btn w-100 ${styles.appBtn}`}
  style={{
    backgroundColor: this.props.color2 ||"#4091e2", // Utilisez la propriété color1 ou une valeur par défaut
    color: "#fff",
    border: "none",
    height: "120%",
  }}
>              <img
                className={styles.icon}
                height="16px" width="16px"
                src={require('../assets/icons/sparkling.png')}
                alt="Sparkling Icon"
                style={{ marginRight: '4px' }}
              />
                            {this.props.title2}

            </a>
          </div>)}
          {this.props.title3 && this.props.title3.trim() !== '' && this.props.title3.trim() !== ' ' && (

          <div className="col-md-4 mb-3">
            <a href={this.props.templatesLink} className={`btn w-100 ${styles.templateBtn}`} style={{ backgroundColor:  this.props.color3 ||"#4574d0", color: "#fff", border: "none", height: "120%" }}>
              <img
                className={styles.icon}
                height="16px" width="16px"
                src={require('../assets/icons/pencil.png')}
                alt="Pencil Icon"
                style={{ marginRight: '4px' }}
              />
                            {this.props.title3}

            </a>
          </div>
          )}
        </div> 
        <div className="row">
        {this.props.title4 && this.props.title4.trim() !== '' && this.props.title4.trim() !== ' ' && (

          <div className="col-md-4 mb-3">
            <a href={this.props.projectsLink} className={`btn w-100 ${styles.projectBtn}`} style={{ backgroundColor:  this.props.color4 ||"#368cf1", color: "#fff", border: "none", height: "120%" }}>
              <img
                className={styles.icon}
                height="16px" width="16px"
                src={require('../assets/icons/lamp.png')}
                alt="Lamp Icon"
                style={{ marginRight: '4px' }}
              />
                            {this.props.title4}

            </a>
          </div> )}
          {this.props.title5 && this.props.title5.trim() !== '' && this.props.title5.trim() !== ' ' && (

          <div className="col-md-4 mb-3">
            <a href={this.props.employeeHandbookLink} className={`btn w-100 ${styles.employeeBtn}`} style={{ backgroundColor:  this.props.color5 || "#4091e2", color: "#fff", border: "none", height: "120%" }}>
              <img
                className={styles.icon}
                height="16px" width="16px"
                src={require('../assets/icons/protection.png')}
                alt="Protection Icon"
                style={{ marginRight: '4px' }}
              />
                            {this.props.title5}

            </a>
          </div> )}
          {this.props.title6 && this.props.title6.trim() !== '' && this.props.title6.trim() !== ' ' && (

          <div className="col-md-4 mb-3">
            <a href={this.props.policiesLink} className={`btn w-100 ${styles.policiesBtn}`} style={{ backgroundColor:  this.props.color6 || "#59b6f3", color: "#fff", border: "none", height: "120%" }}>
              <img
                className={styles.icon}
                height="16px" width="16px"
                src={require('../assets/icons/protection.png')}
                alt="Protection Icon"
                style={{ marginRight: '4px' }}
              />
                            {this.props.title6}

            </a>
          </div>
          )}
        </div>
      </div>
    );
  }
}
