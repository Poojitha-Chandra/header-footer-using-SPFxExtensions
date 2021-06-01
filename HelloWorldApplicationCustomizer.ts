import { override } from "@microsoft/decorators";
import { Log } from "@microsoft/sp-core-library";
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName,
  PlaceholderProvider,
} from "@microsoft/sp-application-base";
import { Dialog } from "@microsoft/sp-dialog";

import * as strings from "HelloWorldApplicationCustomizerStrings";

const LOG_SOURCE: string = "HelloWorldApplicationCustomizer";

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IHelloWorldApplicationCustomizerProperties {
  // This is an example; replace with your own property
  //testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class HelloWorldApplicationCustomizer extends BaseApplicationCustomizer<IHelloWorldApplicationCustomizerProperties> {
  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    /**let message: string = this.properties.testMessage;
    if (!message) {
      message = "(No properties were provided.)";
    }

    Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);*/

    let topPlaceholder: PlaceholderContent =
      this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);
    if (topPlaceholder) {
      topPlaceholder.domElement.innerHTML =
        '<div style="background-color:#CDE2F5;text-align:right;color:white;height:30px"><a style="text-decoration:none;color:black" href="https://sharepointgenc.sharepoint.com/sites/PSYMerchandises/SitePages/PSY-Merchandises.aspx"><strong>Home</strong></a>&nbsp;&nbsp;&nbsp;&nbsp;<a style="text-decoration:none;color:black" href="https://sharepointgenc.sharepoint.com/sites/PSYMerchandises/Lists/Customers/AllItems.aspx">Customers</a>&nbsp;&nbsp;&nbsp;&nbsp;<a style="text-decoration:none;color:black" href="https://sharepointgenc.sharepoint.com/sites/PSYMerchandises/Lists/Orders/AllItems.aspx">Orders</a>&nbsp;&nbsp;&nbsp;&nbsp;<a style="text-decoration:none;color:black" href="https://sharepointgenc.sharepoint.com/sites/PSYMerchandises/Lists/Products/AllItems.aspx">Products</a>&nbsp;&nbsp;&nbsp;&nbsp;</div>';

      let bottomPlaceholder: PlaceholderContent =
        this.context.placeholderProvider.tryCreateContent(
          PlaceholderName.Bottom
        );
      if (bottomPlaceholder) {
        bottomPlaceholder.domElement.innerHTML =
          '<div style="background-color: #C0C0C0; text-align:center;height:30px;color:black" > Copyright © 2021: PSY Merchandises </div>';
        return Promise.resolve();
      }
    }
  }
}
