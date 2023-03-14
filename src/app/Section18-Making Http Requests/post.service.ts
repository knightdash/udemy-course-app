import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({
	providedIn: 'root'
})
export class PostsService {
	constructor(
		private http: HttpClient
	) { }

	createAndStorePosts(title: string, content: string) {
		const postData: Post = { title: title, content: content };
		this.http.post<{ name: string }>('https://ng-complete-guide-205e0-default-rtdb.firebaseio.com/posts.json', postData).subscribe(resData => {
			console.log(resData);
		})
	}

	fetchPosts() {
		return this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-205e0-default-rtdb.firebaseio.com/posts.json')
			.pipe(
				map(resData => {
					const postsArray: Post[] = [];
					for (const key in resData) {
						if (resData.hasOwnProperty(key)) {
							postsArray.push({ ...resData[key], id: key });
						}
					}
					return postsArray;
				})
			);
	}

	deletePosts() {
		return this.http.delete('https://ng-complete-guide-205e0-default-rtdb.firebaseio.com/posts.json');
	}
}