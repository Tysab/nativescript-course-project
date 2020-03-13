import { ChallengeEditComponent } from "./challenge-edit.component";
import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../../shared/shared.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

@NgModule({
    declarations: [ChallengeEditComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild([
            { path: "", component: ChallengeEditComponent }
        ]),
        SharedModule
    ],
    exports: [],
    providers: []
})
export class ChallengeEditModule {}
