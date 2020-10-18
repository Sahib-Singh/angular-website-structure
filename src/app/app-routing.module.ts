import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './_view/layout/auth-layout/auth-layout.component';
import { WebsiteLayoutComponent } from './_view/layout/website-layout/website-layout.component';


const routes: Routes = [

  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      {
        path: '', loadChildren: () => import('./_view/home/home.module').then(m => m.HomeModule)
      },
      {
        path: "error",
        loadChildren: () =>
          import("./_view/error/error.module").then(m => m.ErrorModule)
      }
    ]
  },
  {
    path: "authentication",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./_view/authentication/authentication.module").then(
            m => m.AuthenticationModule
          )
      }
    ]
  },

  {
    path: "**",
    redirectTo: "error/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
