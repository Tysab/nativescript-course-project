import { Component, OnInit, OnDestroy } from "@angular/core";
import { UIService } from "./shared/ui.service";
import { Subscription } from "rxjs";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, OnDestroy {
    activeChallenge = "";
    private drawerSub: Subscription;

    constructor(private uiService: UIService) {}

    ngOnInit() {
        this.drawerSub = this.uiService.drawerState.subscribe();
        console.log('Toggle side drawer!');
    }

    setCurrentChallenge(value: string) {
        this.activeChallenge = value;
        console.log("onChallengeInput: ", value);
    }

    ngOnDestroy() {
        if (this.drawerSub) {
            this.drawerSub.unsubscribe();
        }
    }
}
