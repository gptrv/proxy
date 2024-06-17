import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClipboardComponent } from "../../components/clipboard/clipboard.component";
import { MatAnchor, MatButton } from "@angular/material/button";

@Component({
    templateUrl: 'android.page.html',
    standalone: true,
    imports: [
        CommonModule,
        ClipboardComponent,
        MatAnchor,
        MatButton,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['../styles/platform.scss'],
})
export class AndroidPage {

}
