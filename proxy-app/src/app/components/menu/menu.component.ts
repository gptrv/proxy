import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MatIcon } from "@angular/material/icon";

@Component({
    selector: "app-menu",
    standalone: true,
    imports: [
        RouterLink,
        MatIcon
    ],
    template: `
        <div class="menu">
            <div class="menu__navigation">
                <a [routerLink]="['/ios']" class="menu__button">
                    iOS
                    <mat-icon class="menu__button-icon menu__button-icon__apple">apple</mat-icon>
                </a>
                <a [routerLink]="['/android']" class="menu__button">
                    Android
                    <mat-icon class="menu__button-icon menu__button-icon__android">android</mat-icon>
                </a>
            </div>

        </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: `
        .menu {
            padding-right: 24px;
            margin-bottom: 14px;
            &__navigation {
                display: flex;
                flex-direction: column;
            }
            &__button {
                display: flex;
                margin-bottom: 8px;
                align-items: center;
                font-size: 16px;
                &-icon {
                    margin-left: 8px;

                    &__android {
                        color: #AAFF00;
                    }
                }
            }
        }
    `
})
export class MenuComponent {

}
