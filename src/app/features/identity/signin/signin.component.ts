import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitHandler($event: MouseEvent) {
    $event.preventDefault()
    this.router.navigateByUrl('home')
  }
}
