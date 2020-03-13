import { CurrentChallengeComponent } from "./current-challenge/current-challenge.component";
import { ChallengesRoutingModule } from "./challenges-routing.module";
import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ChallengeTabsComponent } from "./challenge-tabs/challenge-tabs.component";
import { TodayComponent } from "./today/today.component";
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ChallengeTabsComponent,
        CurrentChallengeComponent,
        TodayComponent
    ],
    imports: [NativeScriptCommonModule, ChallengesRoutingModule, SharedModule]
})
export class ChallengesModule {}
