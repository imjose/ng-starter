import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// import { ShellComponent } from './modules/shell/shell.component';

const routes: Routes = [
  // {
  //   TODO: Add auth routes
  //   path: 'auth',
  // },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   // canActivate: [] TODO: Add auth guard,
  //   runGuardsAndResolvers: 'always',
  //   component: ShellComponent,
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}