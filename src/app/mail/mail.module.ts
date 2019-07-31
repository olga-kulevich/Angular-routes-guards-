import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';

import { MailFolderResolve } from "./containers/mail-folder/mail-folder.resolve";
import { MailService } from "./mail.service";
import {MailViewComponent} from "./components/mail-view/mail-view.component";
import {MailViewResolver} from "./components/mail-view/mail-view,.resolve";

import {AuthModule} from "../auth/auth.module";
import {AuthGuard} from "../auth/auth.guard";

export const ROUTES: Routes = [
  {
    path: 'mail',
    component: MailAppComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'folder/:name',
        component: MailFolderComponent,
        resolve: {
          messages: MailFolderResolve
        }
      },
      {
        path: 'message/:id',
        component: MailViewComponent,
        outlet: 'pane',
        resolve: {
          message: MailViewResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent,
    MailViewComponent
  ],
  providers: [
    MailService,
    MailFolderResolve,
    MailViewResolver
  ],
  exports: [
    MailAppComponent
  ]
})
export class MailModule {}
