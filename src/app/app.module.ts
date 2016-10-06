import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GithuntRoutingModule } from './app-routing.module';
import { FeedComponent } from './feed/feed.component';
import { CommentComponent } from './comments/comment.component';
import { CommentsPageComponent } from './comments/comments-page.component';
import { FeedEntryComponent } from './feed/feed-entry.component';
import { VoteButtonsComponent } from './feed/vote-buttons.component';
import { EmojifyPipe } from './shared/emojify.pipe';
import { InfoLabelComponent } from './shared/info-label.component';
import { RepoInfoComponent } from './shared/repo-info.component';
import { LoadingComponent } from './shared/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    CommentComponent,
    CommentsPageComponent,
    FeedEntryComponent,
    VoteButtonsComponent,
    EmojifyPipe,
    InfoLabelComponent,
    RepoInfoComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GithuntRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
