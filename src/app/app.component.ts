import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    activeChallenge = "";

    setCurrentChallenge(value: string) {
        this.activeChallenge = value;
        console.log('onChallengeInput: ', value);
    }
}
