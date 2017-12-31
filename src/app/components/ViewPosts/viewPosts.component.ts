import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {PostModel} from '../../Models/Post.model';
import {PostsModel} from '../../Models/Posts.model';
import {PostsService} from '../../services/posts.service';
import {MovePhotoService} from '../../services/movePhoto.service';
import {StringToDatePipe} from '../../pipes/stringToDate.pipe';
import {Pagination} from '../../Models/Pagination.model';

@Component({
  moduleId: module.id,
  selector: 'es-view-posts',
  styleUrls: ['viewPosts.component.css'],
  templateUrl: 'viewPosts.component.html'
})

export class ViewPostsComponent implements OnInit {
  navigation: Pagination = new Pagination(1, 10, 0);
  page: number = 1;
  posts: PostsModel;
  selectedPost: PostModel;

  constructor(private postsService: PostsService, private movePhotoService: MovePhotoService) {
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getPosts(this.navigation)
      .subscribe((posts: PostsModel) => {
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

  loadNextPage() {
    this.navigation.page += 1;
    this.postsService.getPosts(this.navigation)
    .subscribe((posts: PostsModel) => {
      posts.items.forEach((item: PostModel) => {
        this.posts.add(item);
      });
    });
  }
}
