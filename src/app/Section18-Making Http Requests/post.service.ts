import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({
	providedIn: 'root'
})
export class PostsService {
	error = new Subject<string>();

	constructor(
		private http: HttpClient
	) { }

	createAndStorePosts(title: string, content: string) {
		const postData: Post = { title: title, content: content };
		this.http.post<{ name: string }>(
			'https://ng-complete-guide-205e0-default-rtdb.firebaseio.com/posts.json',
			postData,
			{
				observe: 'response'
			})
			.subscribe(resData => {
				console.log(resData);
			}, error => {
				this.error.next(error.message);
			})
	}

	fetchPosts() {
		let searchParams = new HttpParams();
		searchParams = searchParams.append('print', 'pretty');
		searchParams = searchParams.append('custom', 'key');


		return this.http.get<{ [key: string]: Post }>(
			'https://ng-complete-guide-205e0-default-rtdb.firebaseio.com/posts.json',
			{
				headers: new HttpHeaders({ 'customHeader': 'hi' }),
				params: searchParams
			})
			.pipe(
				map(resData => {
					const postsArray: Post[] = [];
					for (const key in resData) {
						if (resData.hasOwnProperty(key)) {
							postsArray.push({ ...resData[key], id: key });
						}
					}
					return postsArray;
				}),
				catchError(errorRes => {
					// Send to analytic server
					return throwError(errorRes);
				})
			);
	}

	deletePosts() {
		return this.http.delete(
			'https://ng-complete-guide-205e0-default-rtdb.firebaseio.com/posts.json',
			{
				observe: 'events',
				responseType: 'text'
			}
		).pipe(
			tap(event => {
				console.log(event);
				if (event.type === HttpEventType.Sent) {
					console.log('sent type');
				}
				if (event.type === HttpEventType.Response) {
					console.log(event.body);
				}
			})
		);
	}
}