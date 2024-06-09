import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    standalone: true,
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./styles/header.styles.scss'],
    imports: [
        RouterLink
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
