import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FEED_ROUTES } from './feed';
import { COMMENTS_ROUTES } from './comments';

const routes: Routes = [
  ...FEED_ROUTES,
  ...COMMENTS_ROUTES,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class GithuntRoutingModule { }
