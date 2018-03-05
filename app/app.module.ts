import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from "./components/login/registration/registration.component";

import { Config } from './common/config';
import { AppRoutingModule } from "./app.routing";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    NativeScriptModule,
    NativeScriptFormsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent
  ],
  providers: [
    Config
],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
