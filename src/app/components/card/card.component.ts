import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //images
  public parisImg: string = 'assets/img/card1.jpeg';
  public londonImg: string = 'assets/img/card2.jpeg';
  public italyImg: string = 'assets/img/card3.jpeg';
  public newyorkImg: string = 'assets/img/card4.jpeg';

  //content
  public paris: [string, string] = ['Paris', "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture."];
  public london: [string, string] = ['London', "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times."];
  public italy: [string, string] = ['Italy', "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine."];
  public newyork: [string, string] = ['New York', "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean."];

}
