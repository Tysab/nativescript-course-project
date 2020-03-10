import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "ns-challenge-edit",
    templateUrl: "./challenge-edit.component.html",
    styleUrls: ["./challenge-edit.component.css"],
    moduleId: module.id
})
export class ChallengeEditComponent {
    @Output() input = new EventEmitter<string>();
    challengeDescription = "";

    onSetChallenge() {
        if(!this.challengeDescription.length){
            alert('Please enter a challenge');
            return;
        }
        // this.currentChallenge = this.challengeDescription;
        this.input.emit(this.challengeDescription);
        // this.challengeDescription = '';
    }
}
