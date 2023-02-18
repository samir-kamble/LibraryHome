import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-DataTable',
  template: `
    <div class="p-5 m-5">
      <div class="p-5 m-5">
      <div class="table-responsive table-container">
        <table class="table">
         <!--  <thead class="thead-dark">
            <tr dragula="table_columns" [(dragulaModel)]="columns">
              <th *ngFor="let column of columns">
                {{column}}
              </th>
            </tr>
          </thead> -->
          <tbody>
            <tr *ngFor="let row of rows">
              <td *ngFor="let column of columns">
                {{row[column]}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DataTableComponent implements OnInit {

  @Input() columns: string[] | undefined;
  @Input() rows: any[] | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.columns);
    console.log(this.rows);
  }

}
