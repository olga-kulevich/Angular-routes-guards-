import {Component, OnInit} from '@angular/core';
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
    <div class="mail-reply">
      <textarea
        (change)="updateReply($event.target.value)"
          placeholder="Type your reply..."
      value="reply">
      </textarea>
      <button type="button" (click)="sendReply()">
        Send
      </button>
    </div>
  `
})
export class MailViewComponent implements OnInit{
  reply='';

  message: Observable<Mail> = this.route.data.pipe(pluck('message'));
  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.reply = '';
    })
  }

  updateReply(value: string) {
    this.reply = value;
  }

  sendReply() {
   console.log('sent!', this.reply);
  }
}
