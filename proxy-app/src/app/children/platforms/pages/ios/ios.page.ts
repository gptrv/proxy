import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClipboardComponent } from "../../components/clipboard/clipboard.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";

@Component({
    templateUrl: 'ios.page.html',
    standalone: true,
    imports: [
        CommonModule,
        ClipboardComponent,
        MatButtonModule, MatDividerModule, MatIconModule
    ],
    styleUrls: ['../styles/platform.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IosPage {

    public settings: string = 'v2box://routes?multi=W3sicmVtYXJrIjoic2V0dGluZ3MiLCJtYXRjaE1vZGUiOiJyZWdleHAiLCJpc0VuYWJsZSI6dHJ1ZSwidGFnIjoiZGlyZWN0IiwibGlzdElQIjpbImdlb2lwOlJVIiwiZ2VvaXA6cHJpdmF0ZSJdLCJuYW1lIjoicm91dGUuM0JBN0E0RkQtNjFENi00OTBCLUIzMkQtOTU0NkVFQThBODQwIiwidHlwZSI6IkRvbWFpbiIsImxpc3QiOlsiLipcXC5ydSQiXX1d';

    public goToLink(link: string): void {
        window.open(link, '_blank');
    }
}
