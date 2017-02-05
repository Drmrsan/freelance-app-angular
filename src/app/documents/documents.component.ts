import { Component } from '@angular/core';
import { Document } from './document'

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"

	documents: Document[] = [
		{
			title: 'My First doc',
			description: 'some description',
			file_url: 'http://google.com',
			updated_at: '5/2/2017',
			image_url: 'http://google.com',
		},
		{
			title: 'My Second doc',
			description: 'some description',
			file_url: 'http://google.com',
			updated_at: '5/2/2017',
			image_url: 'http://google.com',
		},
		{
			title: 'My Third doc',
			description: 'some description',
			file_url: 'http://google.com',
			updated_at: '5/2/2017',
			image_url: 'http://google.com',
		}

	]
}