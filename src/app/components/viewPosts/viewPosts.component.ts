import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post.model';
import {Posts} from '../../models/posts.model';
import {Photo} from '../../models/photo.model';
import {PostsService} from '../../services/posts.service';
import {Pagination} from '../../models/pagination.model';
import {ConfigService} from '../../services/config.service';
import * as moment from 'moment';

const thumbnailSizePath = '100x100/';
const mainImageSizePath = '300x300/';
const fullSizePath = '';

@Component({
  moduleId: module.id,
  selector: 'es-view-posts',
  styleUrls: ['viewPosts.component.css'],
  templateUrl: 'viewPosts.component.html'
})

export class ViewPostsComponent implements OnInit {
  navigation: Pagination = new Pagination(1, 10, 0);
  page: number = 1;
  posts: Posts;
  selectedPost: Post;
  photosUrl: string;

  constructor(
    private postsService: PostsService,
    private configService: ConfigService
  ) {  }

  ngOnInit(): void {
    this.photosUrl = this.configService.getOption('apiUrl') + '/photos/';
    this.getPosts();
  }

  getThumbnailUrl(photo: Photo) {
    return this.photosUrl + thumbnailSizePath + photo.filename;
  }

  getMainImageUrl(photo: Photo) {
    return this.photosUrl + mainImageSizePath + photo.filename;
  }

  getFullsizeUrl(photo: Photo) {
    return this.photosUrl + fullSizePath + photo.filename;
  }

  getPosts(): void {
    this.postsService.getPosts(this.navigation)
      .subscribe((posts: Posts) => {
        this.posts = posts;
      });
  }

  checkInfiniteScrollingTriggerElement() {
    let triggerElement = document.getElementById('infinitescroll'),
      bottomLineY = document.body.scrollTop + document.body.clientHeight;

    if (bottomLineY >= triggerElement.offsetTop) {
      console.log("trigger is visible");
    }
  }

  initializeInfiniteScrolling() {
    window.onscroll = () => {
      this.checkInfiniteScrollingTriggerElement();
    };
  }

  hasPosts() {
    return !!this.posts;
  }

  formatDate(date) {
    return moment(date).format('LL');
  }

  loadNextPage() {
    this.navigation.page += 1;
    this.postsService.getPosts(this.navigation)
    .subscribe((posts: Posts) => {
      posts.items.forEach((item: Post) => {
        this.posts.items.push(item);
        // TODO: this.posts is not a Posts, just a simple data object got from the server
//        this.posts.add(item);
      });
    });
  }
}
