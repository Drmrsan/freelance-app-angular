import { Component } from '@angular/core';
import { Document } from './document'

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css']
})

export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"

	documents: Document[] = [
		{
			title: 'My First doc',
			description: 'some description',
			file_url: 'http://google.com',
			updated_at: '5/2/2017',
			image_url: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
		},
		{
			title: 'My Second doc',
			description: 'some description',
			file_url: 'http://google.com',
			updated_at: '5/2/2017',
			image_url: 'https://images.pexels.com/photos/205316/pexels-photo-205316.png?w=940&h=650&auto=compress&cs=tinysrgb',
		},
		{
			title: 'My Third doc',
			description: 'some description',
			file_url: 'http://google.com',
			updated_at: '5/2/2017',
			image_url: 'https://images.pexels.com/photos/90807/pexels-photo-90807.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
		}

	]
}