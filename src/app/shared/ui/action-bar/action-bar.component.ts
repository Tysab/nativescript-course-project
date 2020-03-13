import { Component, Input } from "@angular/core";
import { isAndroid, Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";

declare var android: any;

@Component({
    selector: "ns-action-bar",
    templateUrl: "./action-bar.component.html",
    styleUrls: ["./action-bar.component.css"],
    moduleId: module.id
})
export class ActionBarComponent {
    @Input() title: string;
    @Input() showBackButton = true;

    constructor(private router: RouterExtensions, private page: Page) {}

    get android() {
        return isAndroid;
    }

    get canGoBack() {
        return this.router.canGoBack() && this.showBackButton;
    }

    onGoBack() {
        this.router.backToPreviousPage();
    }

    onLoadedActionBar() {
        if (isAndroid) {
            const androidToolbar = this.page.actionBar.nativeView;
            const backButton = androidToolbar.getNavigationIcon();
            if (backButton) {
                backButton.setColorFilter(
                    android.graphics.Color.parseColor("#171717"),
                    (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
                );
            }
        }
    }

}
