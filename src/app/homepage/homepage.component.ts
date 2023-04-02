import { Component, OnInit } from '@angular/core';
import * as breakingBad from "../../assets/data/breakingbad.json";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit{
  title = 'Home';

  
  data: any = (breakingBad as any).default;

  ngOnInit(): void {
    console.log("Data", this.data);
  }

}
