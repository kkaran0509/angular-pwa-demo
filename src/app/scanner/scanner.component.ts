import { Component, OnInit } from "@angular/core";
import { Result } from "@zxing/library";
import { map } from "rxjs/operators";

@Component({
  selector: "app-scanner",
  templateUrl: "./scanner.component.html",
  styleUrls: ["./scanner.component.scss"]
})
export class ScannerComponent implements OnInit {
  currentDevice: MediaDeviceInfo = null;
  hasDevices: boolean;
  hasPermission: boolean;
  qrResult: string;
  guestExist: boolean;

  onCodeResult(resultString: string): void {
    this.qrResult = resultString;
    console.log("QR result", resultString);
  }

  onHasPermission(has: boolean) {
    console.log("&^&^&^&^&^&^&",has);
    this.hasPermission = has;
  }

  constructor() {}

  ngOnInit(): void {}

  clearResult(): void {
    this.qrResult = null;
  }

  // onCodeResult(resultString: string): void {
  //   console.log("QR result",resultString);
    
  // }

  // onHasPermission(has: boolean): void {
  //   this.hasPermission = has;
  // }

  checkInGuest(): void {
    console.log("Guest Check");
    
  }

  clearMessage() {
    setTimeout(() => {
      this.guestExist = null;
    }, 3000);
  }

  
}
