import { Routes } from '@angular/router';
import { MainPage } from './pages/main/main.page';

export const routes: Routes = [
    {
        path: '',
        component: MainPage
    },
    {
        path: 'ios',
        loadComponent: () => import('./children/platforms/pages/ios/ios.page')
            .then(c => c.IosPage)
    },
    {
        path: 'android',
        loadComponent: () => import('./children/platforms/pages/android/android.page')
            .then(c => c.AndroidPage)
    }
];
