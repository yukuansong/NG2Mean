// src/app/components/todo/todo.component.ts

import { Component } from '@angular/core';
import { TodoService } from'./todo.service';

// We import http into the TodoServie but we can only specify providers within our component
import { HTTP_PROVIDERS } from '@angular/http';

// create the metadata with the @Component decorator
@Component({
	selector: 'todo',
		template: `
		<div class="container">
			<!-- HEADER and TODO Count -->
			<div class="jumbotron text-center">
				<h1>ToDo <span class="label label-info"> {{todos.length}}</span></h1>
			</div>
			
			<!-- TODO LIST -->
			<div id="todo-list" class="row">
				<div class="col-sm-4 col-sm-offset-4">
				  <div class="checkbox" *ngFor="let todo of todos">
					  <label>
						  <input type="checkbox" (click)="deleteTodo(todo._id)" bind-checked="false">
						  {{ todo.text }}
					  </label>
				  </div>
				</div>
			</div>
		
		<!-- FORM TO CREATE TODOS -->
		<div id="todo-form" class="row">
			<div class="col-sm-8 col-sm-offset-2 text-center">
				<form>
					<div class="form-group">
						<input type="text" class="form-control input-lg text-center" placeholder="I want to buy puppy that will love me forever" [(ngModel)]="todoData.text" required>
					</div>
					
					<!-- create a ToDo -->
					<button type="submit" class="btn btn-primary btn-lg" (click)="createTodo()">Add</button>
				</form>
			</div>
		</div>
	</div>
	`,
	// Let Angular2 know about 'Http' and "TodoService'
	providers: [...HTTP_PROVIDERS, TodoService ]

})


export class ToDo {
	private todos: Array<ToDo> = [];

	todoData = {
		text:''
	};
	
	constructor(public todoService: TodoService) {
		console.log('Todo constructor goes!');
		todoService.getAll()
					.subscribe((res) => {
						this.todos = res;
						this.todoData.text ='';
					});
	}
	
	// create a todo record
	createTodo() {
		this.todoService.createTodo(this.todoData)
						.subscribe((res) => {
							this.todos = res;
							this.todoData.text = '';
						})
	}
	
	// Delete a todo record
	deleteTodo(id) {
		this.todoService.deleteTodo(id)
			.subscribe((res) => {
				this.todos = res;
			})
	}
}