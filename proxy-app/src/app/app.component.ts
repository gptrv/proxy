import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPage } from './pages/main/main.page';
import { HeaderComponent } from "./components/header/header.componet";
import { AndroidPage } from "./children/platforms/pages/android/android.page";
import { IosPage } from "./children/platforms/pages/ios/ios.page";
import { MenuComponent } from "./components/menu/menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MainPage,
        HeaderComponent,
        AndroidPage,
        IosPage,
        MenuComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    title = 'proxy-app';
}
