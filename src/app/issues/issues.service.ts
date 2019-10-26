import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Issue } from "../models/issue.interface";
import { environment } from "src/environments/environment";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class IssueService {
  constructor(private http: HttpClient) {}

  private issuesUrl: string = environment.issuesUrl;

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.issuesUrl).pipe(take(1));
  }

  getIssueById(issueId: number): Observable<Issue> {
    return this.http.get<Issue>(this.issuesUrl + "/" + issueId).pipe(take(1));
  }

  getCommentsByIssue(issueId: number): Observable<Comment[]> {
    return this.http
      .get<Comment[]>(this.issuesUrl + "/" + issueId + "/comments")
      .pipe(take(1));
  }
}
