import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
    styleUrls: ['./home.component.css'],
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    public message: string;
    constructor(homeService: HomeService) {
        homeService
            .testMethod()
            .subscribe(result => this.message = result.json().message);
    }
};
