import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseComponent } from './response/response.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-verfiy-ticket',
  templateUrl: './verfiy-ticket.component.html',
  styleUrls: ['./verfiy-ticket.component.scss'],
})
export class VerfiyTicketComponent implements OnInit {
  title: string = 'Verify Ticket';
  verifyForm!: FormGroup;
  baseurl: string = '';
  isLoading: boolean = false;
  isSuccess: boolean = false;
  isError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.verifyForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get verfiyFormControl() {
    return this.verifyForm.controls;
  }

  getErrorMessage(instace: string) {
    if (
      instace === 'email' &&
      this.verfiyFormControl['email'].hasError('required')
    ) {
      return 'Please enter email address';
    } else if (
      instace === 'email' &&
      this.verfiyFormControl['email'].hasError('email')
    ) {
      return 'Please enter a valid email';
    } else {
      return;
    }
  }

  openresponse(data: any) {
    this.dialog.open(ResponseComponent, {
      data,
      panelClass: 'speaker--popup',
    });
  }

  onSubmit() {
    this.isLoading = true;
    // console.log(this.verifyForm.value);

    this.http
      .post(`${environment.baseUrl}/ticket-confirmer `, this.verifyForm.value)
      .subscribe(
        (res: any) => {
          this.isSuccess = true;
          this.isLoading = false;

          this.verifyForm.reset()
          this.openresponse({ res, isSuccess: true });
        },
        (err: any) => {
          this.isError = true;
          this.openresponse({ err, isSuccess: false });
          this.isLoading = false;
        }
      );
  }
}
