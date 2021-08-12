
import { DataService } from 'src/app/shared/services/data.service';
import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-characters-list',
  template: `
  <section class="character__list" infiniteScroll (scrolled)="onScrollDown()">
    <app-characters-card *ngFor="let character of characters$ | async" [character]="character"></app-characters-card>
    <button *ngIf="showButton" (click)="onScrollTop()" class="button">⬆️</button>
  </section>
  `,
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent {
  characters$ = this.dataSvc.characters$;
  showButton = false;

  private scrollHeight = 500;
  private pageNum = 1;

  constructor(@Inject(DOCUMENT) private document: Document, private dataSvc: DataService) { }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffSet || scrollTop) > this.scrollHeight;
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  onScrollDown(): void {
    this.pageNum++;
    this.dataSvc.getCharactersByPage(this.pageNum);
  }
}
