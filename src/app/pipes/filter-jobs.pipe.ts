import {Pipe, PipeTransform} from '@angular/core';
import {IJobPost} from "../utils/types";

@Pipe({
  name: 'filterJobs'
})
export class FilterJobsPipe implements PipeTransform {

  transform(posts: IJobPost[], searchText: string): IJobPost[] {
    return posts.filter((jobPost) => jobPost.title.toLowerCase().includes(searchText.toLowerCase()))
  }

}
