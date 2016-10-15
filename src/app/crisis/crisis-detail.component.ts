import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }    from '@angular/router';

@Component({
  template: `
    <h3 highlight>Crisis Detail</h3>
    <div>Crisis id: {{id}}</div>
    <br>
    <a routerLink="../list">Crisis List</a>
  `
})
export class CrisisDetailComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
    });
  }
}
