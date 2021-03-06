import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, of } from "rxjs";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root"
})
export class GeneralService {
  reloadService = new BehaviorSubject<boolean>(true);
  httpStatus = new BehaviorSubject<string>("firstload");
  expiredTokenUrl = new BehaviorSubject<any>("");
  permissionRole = new BehaviorSubject<boolean>(true);

  constructor(private router: Router, private http: HttpClient) {}

  // Alert Message for Adding informations into the database
  alert(data: any) {
    const swalWithBootstrapButtons = Swal.mixin({});
    swalWithBootstrapButtons.fire(data.header, data.text, data.type);
  }

  /*
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  public handleError = (error: any): Observable<any> => {
    let message = "";
    if (error) {
      if (error.error) {
        message = error.error.message;
      } else {
        message = error.message;
      }
    }
    console.log(message, "General Error Message");
    return of(null);
  };

  sweetAlertCreate(type) {
    return Swal.fire({
      title: `Create ${type}?`,
      type: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, create it!"
    });
  }

  sweetAlertAssign(type) {
    return Swal.fire({
      title: `Assign ${type}?`,
      type: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, assign user!"
    });
  }

  sweetAlertUpdates(type) {
    return Swal.fire({
      title: `Update ${type}?`,
      type: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!"
    });
  }

  sweetAlertDeletions(type) {
    return Swal.fire({
      title: `Delete ${type}?`,
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });
  }

  sweetAlertHTML(action, html) {
    Swal.fire({
      title: action,
      type: "warning",
      html: html
    });
  }

  sweetAlertSucess(action, msg) {
    return Swal.fire(`${action}`, msg, "success");
  }

  sweetAlertSucessNavigate(action, msg, navigationText) {
    return Swal.fire({
      title: action,
      text: msg,
      type: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Navigate to ${navigationText}?`,
      cancelButtonText: "Close"
    });
  }

  sweetAlertError(msg) {
    return Swal.fire("Try again!", msg, "error");
  }

  sweetAlertHTMLNotify(message) {
    Swal.fire({
      type: "success",
      position: "top",
      title: message,
      toast: true,
      showConfirmButton: false,
      timer: 4000
    });
  }

  sweetAlertFieldValidation(fields) {
    return Swal.fire({
      text: `${fields}`,
      type: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Okay"
    });
  }

  sweetAlertAuthVerification(errMsg) {
    Swal.fire({
      type: "error",
      position: "top",
      title: errMsg,
      toast: true,
      showConfirmButton: false,
      timer: 4000
    });
  }
}
