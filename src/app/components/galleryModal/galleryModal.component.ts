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

  constructor(
    private galleryService: GalleryService
  ) { }

  getImageUrl() {
    return this.galleryService.getImageUrl();
  }

  onClickOverlay() {
    this.galleryService.close();
  }

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.galleryService.close();
    }
  }

  onClickClose(event) {
    event.stopPropagation();
    this.galleryService.close();
  }

  onClickPrevious(event) {
    event.stopPropagation();
    this.galleryService.setPrevious();
  }

  onClickNext(event) {
    event.stopPropagation();
    this.galleryService.setNext();
  }

  ngOnInit() {
    this.galleryService.change.subscribe( (isOpen) => {
      this.isOpen = isOpen;
    });
  }
}
