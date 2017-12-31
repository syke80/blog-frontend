import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPostsPageComponent } from './components/EditPostsPage/editPostsPage.component';
import { ViewPostsPageComponent } from './components/ViewPostsPage/viewPostsPage.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/editposts',
        pathMatch: 'full'
    },
  {
    path: 'editposts',
    component: EditPostsPageComponent
  },
  {
    path: 'viewposts',
    component: ViewPostsPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
