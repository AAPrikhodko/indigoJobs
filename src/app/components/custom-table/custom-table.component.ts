import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IJobPost, ITableSettings} from "../../utils/types";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent {

  constructor(private datePipe: DatePipe) {
  }

  renderCell(jobPost: IJobPost, dataIndex: keyof IJobPost): string {
    switch (dataIndex) {
      case "title": {
        return jobPost.title;
      }
      case "openAt": {
        let result: string | null
        result = this.datePipe.transform(jobPost.openAt, 'dd.MM.yy')
        return result ? result : ""
      }
      case "closeAt": {
        let result: string | null
        result = this.datePipe.transform(jobPost.closeAt, 'dd.MM.yy')
        return result ? result : ""
      }
      case "interviewTypes": {
        return jobPost.interviewTypes.length.toString()
      }
      default: {
        return ""
      }
    }
  }

  @Output() rowClickEvent = new EventEmitter<number>()
  @Input() jobPosts?: IJobPost[];
  @Input() tableSettings: ITableSettings = {
    pageSize: 10,
    columns: []
  }

  rowClickHandler(id: number) {
    this.rowClickEvent.emit(id)
  }
}
