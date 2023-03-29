import {Component, OnInit} from '@angular/core';
import textData from '../../languages/en.json'
import {IJobPost, ITableSettings} from "../../utils/types";
import {JobPostService} from "../../services/jobs.service";

@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrls: ['./job-posts.component.scss']
})
export class JobPostsComponent implements OnInit {

  constructor(
    private jobPostService: JobPostService,
  ) {
  }

  textData = textData
  term = ''
  searchText = ''
  loading = false
  currentIdForModal: number | null = null
  jobPosts: IJobPost[] = []
  tableSettings: ITableSettings = {
    columns: [
      {
        dataIndex: "title",
        caption: textData.table.caption.title,
        compare: (a: IJobPost, b: IJobPost) => a.title.localeCompare(b.title)
      },
      {
        dataIndex: "openAt",
        caption: textData.table.caption.opensAt,
        compare: (a: IJobPost, b: IJobPost) => a.openAt > b.openAt ? 1 : a.openAt < b.openAt ? -1 : 0
      },
      {
        dataIndex: "closeAt",
        caption: textData.table.caption.closesAt,
        compare: (a: IJobPost, b: IJobPost) => a.closeAt > b.closeAt ? 1 : a.closeAt < b.closeAt ? -1 : 0
      },
      {
        dataIndex: "interviewTypes",
        caption: textData.table.caption.numbersOfInterviews,
        compare: (a: IJobPost, b: IJobPost) => a.interviewTypes.length - b.interviewTypes.length
      },

    ],
    pageSize: 10
  }

  handleRowClick(id: number) {
    console.log(id)
    this.currentIdForModal = id
  }

  handleModalClose() {
    this.currentIdForModal = null
  }

  handleSearch(): void {
    this.searchText = this.term
  }

  handleRefresh(): void {
    this.term = ''
    this.searchText = ''
    this.ngOnInit()
  }

  getJobByID(id: number): IJobPost | undefined {
    return this.jobPosts.find(j => j.id === id)
  }

  ngOnInit(): void {
    this.loading = true
    this.jobPostService.getAll().subscribe((jobPosts) => {
      this.jobPosts = jobPosts
      this.loading = false
    })
  }

}
