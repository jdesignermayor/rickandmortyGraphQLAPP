import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-episodes',
  template: `
    <section class="container">
      <ul class="episodes__list">
          <li *ngFor="let episode of episodes$ | async">
              {{episode.episode}} - {{episode.name}}
          </li>
      </ul>
  </section>
`,
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodes$ = this.dataSvc.episodes$;
  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
  }

}
