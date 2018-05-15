import { Injectable } from '@angular/core';
import * as dialogs from "ui/dialogs";

@Injectable()
export class ErrorMessage {

    public static show(content) {
        dialogs.alert({
            title: "Error",
            message: `${content}`,
            okButtonText: "OK"
        });
    }
}