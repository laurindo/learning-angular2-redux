import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SystemComponent } from './system/system.component';
import { SystemHomeComponent } from './system/home/system.home.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'system', component: SystemComponent,
        children: [
            { path: '', redirectTo: 'system-home', pathMatch: 'full' },
            { path: 'home', component: SystemHomeComponent }
        ]
    },
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);