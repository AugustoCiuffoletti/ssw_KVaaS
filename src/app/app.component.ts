import { Component, VERSION } from "@angular/core";
import { KvaasService } from "./kvaas.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private kvaas: KvaasService) {}
  chiave: String;
  res = this.kvaas
    .getvalue()
    .subscribe(
      x => (this.chiave = JSON.stringify(x)),
      err => console.error("Observer got an error: " + err)
    );
}
