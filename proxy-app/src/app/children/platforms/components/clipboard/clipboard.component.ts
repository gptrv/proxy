import { ClipboardModule } from "@angular/cdk/clipboard";
import { ChangeDetectionStrategy, Component, Input, signal, WritableSignal } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { Writable } from "node:stream";
import { NgStyle, NgTemplateOutlet } from "@angular/common";
import { MatCard, MatCardActions, MatCardContent } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@Component({
    standalone: true,
    selector: 'app-clipboard',
    imports: [
        ClipboardModule,
        MatIcon,
        NgStyle,
        MatCardContent,
        MatCard,
        NgTemplateOutlet,
        MatCardActions,
        MatButtonModule
    ],
    template: `
        <mat-card class="clipboard">
            <mat-card-content class="clipboard__text">
                {{text}}
            </mat-card-content>
            <mat-card-actions>
                <button class="clipboard__btn" [cdkCopyToClipboard]="text" mat-raised-button color="accent">Копировать</button>
            </mat-card-actions>
        </mat-card>
        <ng-template #settings>
            <div class="clipboard" [cdkCopyToClipboard]="text" [cdkCopyToClipboard]="text">
                <div class="clipboard__text">
                </div>
                <!--            <button class="clipboard__btn" (click)="click()" [cdkCopyToClipboard]="text">-->
<!--                @if (isCopied()) {-->
<!--                    <mat-icon class="clipboard__icon clipboard__icon-green">check</mat-icon>-->

<!--                } @else {-->
<!--                    <mat-icon class="clipboard__icon">content_copy</mat-icon>-->
<!--                }-->
                <!--            </button>-->
            </div>
        </ng-template>

    `,
    styleUrls: ['./styles/clipboard.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClipboardComponent {

    @Input({ required: true })
    public text!: string;

    public isCopied: WritableSignal<boolean> = signal(false);

    public click(): void {
        this.isCopied.set(true);
    }

}
