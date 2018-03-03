import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import firebase = require('nativescript-plugin-firebase');

platformNativeScriptDynamic().bootstrapModule(AppModule);
