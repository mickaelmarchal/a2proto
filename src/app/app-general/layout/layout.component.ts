import {Component, OnInit, OnDestroy}              from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService }            from "../../core/auth/auth.service";
import { CurrentUser }            from "../../core/auth/auth.model";


@Component({
  moduleId: module.id,
  templateUrl: 'layout.component.html',
})
export class AppLayoutComponent implements OnInit, OnDestroy {

  currentUser?: CurrentUser;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {

    authService.onCurrentUserChange().subscribe((currentUser: CurrentUser) => { this.currentUser = currentUser });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  ngOnInit() {
    document.querySelector("body").classList.add("withlayout");
  }

  ngOnDestroy() {
    document.querySelector("body").classList.remove("withlayout");
  }

}

