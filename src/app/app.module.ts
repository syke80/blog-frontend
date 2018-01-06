import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

import {AppComponent} from './app.component';
import {EditPostsComponent} from './components/EditPosts/editPosts.component';
import {EditPostsPageComponent} from './components/EditPostsPage/editPostsPage.component';
import {AddTagComponent} from './components/addTag/addTag.component';
import {GalleryModalComponent} from './components/galleryModal/galleryModal.component';
import {ViewPostsComponent} from './components/ViewPosts/viewPosts.component';
import {ViewPostsPageComponent} from './components/ViewPostsPage/viewPostsPage.component';
import {PostsService} from './services/posts.service';
import {MovePhotoService} from './services/movePhoto.service';
import {MoveOutPhotoService} from './services/moveOutPhoto.service';
import {ConfigService} from './services/config.service';
import {GalleryService} from './services/gallery.service';

import { DraggableDirective } from './directives/draggable.directive';
import { DropTargetDirective } from './directives/dropTarget.directive';
import { GalleryDirective } from './directives/gallery.directive';
import { DragService } from './services/drag.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    routing,
    FormsModule
  ],
  declarations: [
    AppComponent,
    GalleryModalComponent,
    EditPostsPageComponent,
    EditPostsComponent,
    ViewPostsPageComponent,
    ViewPostsComponent,
    AddTagComponent,
    DraggableDirective,
    DropTargetDirective,
    GalleryDirective
  ],
  providers: [
    MovePhotoService,
    MoveOutPhotoService,
    PostsService,
    ConfigService,
    DragService,
    GalleryService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
