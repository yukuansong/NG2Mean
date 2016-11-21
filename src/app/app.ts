// src/app/app.ts

// this file contains the main class as well as the necessary decorators for creating the primary 'app' 'commponent'

import { Component } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import { ToDo } from './components/todo/todo.component';

/*
 * App main compenent
 */
 @Component({
	selector: 'app',
	providers: [],
	directives: [...ROUTER_DIRECTIVES,
						ToDo],
	pipes: [],
	styleUrls: [require("!style!css!sass!../sass/main.scss")],
	template: `
		<main>
			<router-outlet></router-outlet>
		</main>
	`
 })
 
 /**
  * router configuration
  */
  @RouteConfig([
	{path: '/', component: ToDo, name: 'Index' }
  ])
  
 export class App {
	constructor(){
	
	}
 }