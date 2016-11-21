// src/app/components/todo/todo.service.ts

import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Injectable()

export class TodoService {
	
	constructor(public http: Http){}
	
	getAll() {
		return this.http.get('/api/todo')
				.map(res => res.json());
	}
	
	createTodo(data) {
		let headers = new Headers();
		
		headers.append('Content-Type', 'application/json');
		
		return this.http.post('/api/todo', JSON.stringify(data), {headers: headers})
						.map(res => res.json());
	}
	
	deleteTodo(id) {
		return this.http.delete(`/api/todo/${id}`)
					.map(res => res.json());
	}
}