import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
    imageObject: Array<object> = [
        {
            image: 'assets/img/tertulias/tertulia01.jpeg',
            thumbImage: 'assets/img/tertulias/tertulia01.jpeg',
            title: 'Tertulia 1',
            alt: 'alt of image',
        },
        {
            image: 'assets/img/tertulias/tertulia02.jpg',
            thumbImage: 'assets/img/tertulias/tertulia02.jpg',
            title: 'Tertulia 2',
            alt: 'Image alt',
            order: 1,
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
