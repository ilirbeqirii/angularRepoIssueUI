import { Component, OnInit } from "@angular/core";
import { Issue } from "src/app/models/issue.interface";
import { IssueService } from "../issues.service";
import { catchError } from "rxjs/operators";

@Component({
  selector: "github-issue-list",
  templateUrl: "./issues-list.component.html",
  styleUrls: ["./issues-list.component.css"]
})
export class IssuesListComponent implements OnInit {
  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.issueService
      .getIssues()
      .pipe(catchError(errorMessage => (this.errorMessage = errorMessage)))
      .subscribe((issues: Issue[]) => {
        this.issues = issues.slice(0, 29);
        this.filteredIssues = issues.slice(0, 29);
      });
  }

  title: string = 'Angular Repo Issues';
  issues: Issue[];
  filteredIssues: Issue[];
  ISSUES_STATUSES: string[] = ["open", "close"];
  errorMessage: string;

  filter: string = "";
  get filterList(): string {
    return this.filter;
  }

  set filterList(value: string) {
    this.filter = value;
    this.filteredIssues = this.filterList
      ? this.perfomFilter(this.filterList)
      : this.issues;
  }

  perfomFilter(filterBy: string): Issue[] {
    filterBy = filterBy.toLocaleLowerCase();

    if (this.ISSUES_STATUSES.includes(filterBy)) {
      return this.issues.filter(
        (issue: Issue) => issue.state.toLocaleLowerCase() === filterBy
      );
    } else {
      return this.issues.filter((issue: Issue) => {
        return (
          issue.title.toLocaleLowerCase().includes(filterBy) ||
          issue.body.toLocaleLowerCase().includes(filterBy)
        );
      });
    }
  }
}
