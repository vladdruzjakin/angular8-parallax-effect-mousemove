import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public parallax_item: Array<any>;

  constructor() {
    this.parallax_item = [
      {
        top: "10%",
        left: "5%",
        size: "tiny",
        rotate: "10",
        opacity: "0.9"
      },
      {
        top: "15%",
        left: "12%",
        size: "small",
        rotate: "20",
        opacity: "0.1"
      },
      {
        top: "75%",
        left: "72%",
        size: "middle",
        rotate: "20",
        opacity: "0.1"
      },
      {
        top: "55%",
        left: "32%",
        size: "big",
        rotate: "40",
        opacity: "0.7"
      },
      {
        top: "35%",
        left: "92%",
        size: "small",
        rotate: "20",
        opacity: "0.1"
      },
      {
        top: "25%",
        left: "62%",
        size: "small",
        rotate: "20",
        opacity: "0.1"
      },
    ];
  }
}
