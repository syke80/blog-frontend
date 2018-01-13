import { Component, OnInit, HostListener } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';

@Component({
  moduleId: module.id,
  selector: 'es-gallery-modal',
  styleUrls: ['galleryModal.component.css'],
  templateUrl: 'galleryModal.component.html'
})
export class GalleryModalComponent implements OnInit {
  isOpen = false;
  isImageLoaded = false;

  constructor(
    private galleryService: GalleryService
  ) { }

  getImageUrl() {
    return this.galleryService.getImageUrl();
  }

  close() {
    this.isImageLoaded = false;
    this.galleryService.close();
  }

  onClickOverlay() {
    this.close();
  }

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.galleryService.close();
    }
  }

  onClickClose(event) {
    event.stopPropagation();
    this.close();
  }

  onClickPrevious(event) {
    event.stopPropagation();
    this.isImageLoaded = false;
    this.galleryService.setPrevious();
  }

  onClickNext(event) {
    event.stopPropagation();
    this.isImageLoaded = false;
    this.galleryService.setNext();
  }

  onImageLoad() {
    this.isImageLoaded = true;
  }

  ngOnInit() {
    this.galleryService.change.subscribe( (isOpen) => {
      this.isOpen = isOpen;
    });
  }
}
