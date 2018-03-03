import { platformNativeScript } from "nativescript-angular/platform-static";
import { AppModule } from "./app.module";
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

platformNativeScriptDynamic().bootstrapModule(AppModule);
