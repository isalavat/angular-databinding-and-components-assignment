import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';

@NgModule({
  /**
   * here we declare all the components
   */
  declarations: [
    AppComponent,
    ServerElementComponent,
    CockpitComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
