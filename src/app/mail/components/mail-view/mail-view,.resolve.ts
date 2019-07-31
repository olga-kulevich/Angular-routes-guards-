import { Injectable } from "@angular/core";
import { Mail } from "../../models/mail.interface";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { MailService } from "../../mail.service";

@Injectable()

export class MailViewResolver implements Resolve<Mail>{
  constructor(private mailService: MailService){}
  resolve(route: ActivatedRouteSnapshot) {
    return this.mailService.getMessage(route.params.id);
  }
}
