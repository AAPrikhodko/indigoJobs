import {NzTableSortFn} from "ng-zorro-antd/table";

export interface IJobPost {
  id: number
  title: string
  openAt: string
  closeAt: string
  interviewTypes: IInterviewType[]
  description: string
  notes: string
}

export interface IInterviewType {
  description: string
  id: string
  order: number
  title: string
}

export interface IColumn {
  dataIndex: keyof IJobPost
  caption: string
  compare: NzTableSortFn<IJobPost>
}

export interface ITableSettings {
  pageSize: number
  columns: IColumn[]
}
