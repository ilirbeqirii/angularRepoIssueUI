import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Issue } from "src/app/models/issue.interface";
import { IssueService } from "../issues.service";
import { catchError } from "rxjs/operators";

@Component({
  selector: "github-issue-details",
  templateUrl: "./issue-details.component.html",
  styleUrls: ["./issue-details.component.css"]
})
export class IssueDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private issueService: IssueService
  ) {}

  issue: Issue;
  comments: Comment[];
  errorMessage: string;

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");

    this.issueService
      .getIssueById(id)
      .pipe(catchError(error => (this.errorMessage = error)))
      .subscribe((issue: Issue) => (this.issue = issue));

    this.issueService
      .getCommentsByIssue(id)
      .pipe(catchError(error => (this.errorMessage = error)))
      .subscribe((comments: Comment[]) => (this.comments = comments));
  }

  onBack(): void {
    this.router.navigate(["/issues"]);
  }
}
