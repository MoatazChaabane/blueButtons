import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'BlueButtonsWebPartStrings';
import BlueButtons from './components/BlueButtons';
import { IBlueButtonsProps } from './components/IBlueButtonsProps';

export interface IBlueButtonsWebPartProps {
  policiesLink: any;
  employeeHandbookLink: any;
  projectsLink: any;
  templatesLink: any;
  applicationsLink: any;
  requestFormsLink: any;
  description: string;
  title1:string;
  title2:string;
  title3:string;
  title4:string;
  title5:string;
  title6:string;
}

export default class BlueButtonsWebPart extends BaseClientSideWebPart<IBlueButtonsWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  public render(): void {
    const element: React.ReactElement<IBlueButtonsProps> = React.createElement(
      BlueButtons,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,
        requestFormsLink: this.properties.requestFormsLink,
      applicationsLink: this.properties.applicationsLink,
      templatesLink: this.properties.templatesLink,
      projectsLink: this.properties.projectsLink,
      employeeHandbookLink: this.properties.employeeHandbookLink,
      policiesLink: this.properties.policiesLink,
      title1: this.properties.title1,
      title2: this.properties.title2,
      title3: this.properties.title3,
      title4: this.properties.title4,
      title5: this.properties.title5,
      title6: this.properties.title6,
      } as unknown as IBlueButtonsProps
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(message => {
      this._environmentMessage = message;
    });
  }



  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
            case 'TeamsModern':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              environmentMessage = strings.UnknownEnvironment;
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
               
                PropertyPaneTextField('title1', {
                  label: 'title of button 1'
                }),
                PropertyPaneTextField('requestFormsLink', {
                  label: 'Link of button 1'
                }),
                PropertyPaneTextField('title2', {
                  label: 'title of button 2'
                }),
                PropertyPaneTextField('applicationsLink', {
                  label: 'Link of button 2'
                }),
                PropertyPaneTextField('title3', {
                  label: 'title of button 3'
                }),
                PropertyPaneTextField('templatesLink', {
                  label: 'Link of button 3'
                }),
                PropertyPaneTextField('title4', {
                  label: 'title of button 4'
                }),
                PropertyPaneTextField('projectsLink', {
                  label: 'Link of button 4'
                }),
                PropertyPaneTextField('title5', {
                  label: 'title of button 5'
                }),
                PropertyPaneTextField('employeeHandbookLink', {
                  label: 'Link of button 5'
                }),
                PropertyPaneTextField('title6', {
                  label: 'title of button 6'
                }),
                PropertyPaneTextField('policiesLink', {
                  label: 'Link of button6'
                }),
                
              ]
            }
          ]
        }
      ]
    };
  }
  
}
