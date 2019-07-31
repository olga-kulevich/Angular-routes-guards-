import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Mail} from "../../models/mail.interface";
import {pluck} from "rxjs/operators";

@Component({
  selector: 'mail-view',
  styleUrls: ['mail-view.component.scss'],
  template: `
    <div class="mail-view">
      <h2>{{ (message | async).from }}</h2>
      <h2>{{ (message | async).full }}</h2>
    </div>
  `
})
export class MailViewComponent {
  message: Observable<Mail> = this.route.data.pipe(pluck('message'));
  constructor(private route: ActivatedRoute){}
}
