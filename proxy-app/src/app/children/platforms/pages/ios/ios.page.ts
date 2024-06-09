import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    templateUrl: 'ios.page.html',
    standalone: true,
    imports: [
        CommonModule
    ],
    styleUrls: ['../styles/platform.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IosPage {

}
