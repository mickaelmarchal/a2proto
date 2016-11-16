import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'datatable',
  templateUrl: 'datatable.component.html',
//  styleUrls: ['datatable.component.css']
})
export class DatatableComponent {

  @Input('columns')
  columns: Array<any> = [];

  @Input('data')
  data: Array<any> = [];

  @Input('actions')
  actions: Array<any> = [];

}
