import { Routes } from '@angular/router';
import { AppComponent } from './Components/app/app.component';
import { AuthGuard } from './Services/authGuard/auth.guard.service';
import { LoginViewComponent } from './Components/login-view/login-view.component';

export const routes: Routes = [
    {
        path: "", 
        component: AppComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "account/login", 
        component: LoginViewComponent,
    }
];
