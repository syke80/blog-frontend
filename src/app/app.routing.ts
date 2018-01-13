import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPostsPageComponent } from './components/editPostsPage/editPostsPage.component';
import { ViewPostsPageComponent } from './components/viewPostsPage/viewPostsPage.component';

const appRoutes: Routes = [
  {
    path: 'editposts',
    component: EditPostsPageComponent
  },
  {
    path: '',
    component: ViewPostsPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
