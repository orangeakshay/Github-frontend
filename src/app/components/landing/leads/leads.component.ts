import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective} from '@angular/forms';
import { UserModel } from '../../../models/user.model';
import {UserService} from '../../../services/auth.service';
import {PasswordModel} from '../../../models/password';
import {LeadsModel} from '../../../models/leads.model';


const EMPTY_USER: LeadsModel  = {
  companyname: '',
  companyphone: 0,
  representativename: '',
  representativephone: ''
};


@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
  userDetailsForm: FormGroup;
  leadsModel: LeadsModel;
  passwordModel: PasswordModel;
  btnMessage = 'REGISTER';
  userProfileError: boolean;
  errorMessage: '';
  successfullUpdate = false;
  loading = false;
  formattedaddress = ' ';
  constructor(private fb: FormBuilder, private userService: UserService) {
  }
  options = {
    componentRestrictions: {
      country: ['AU']
    }
  };
  ngOnInit()  {
    this.leadsModel = EMPTY_USER;
    this.setFormControls();
    this.loadServices();
  }

  loadServices(){
  }

  genericSuccessMessage(){
    this.btnMessage = 'REGISTERED';
    this.successfullUpdate = true;
    setTimeout(() => {
      this.successfullUpdate = false;
      this.loading = false;
      this.btnMessage = 'REGISTER';
    }, 2000);
  }
  genericErrorMessage(){
    this.btnMessage = 'REGISTERED';
    this.userProfileError = true;
    setTimeout(() => {
      this.userProfileError = false;
      this.loading = false;
      this.errorMessage = '';
      this.btnMessage = 'REGISTER';
    }, 2000 );
  }

  submit = () => {
    this.btnMessage = 'REGISTERING';
    this.loading = true;
    if (this.userDetailsForm.valid) {
      this.leadsModel = this.userDetailsForm.value;
    } else {
      this.invalidateForm();
    }
    setTimeout(() => {
      this.userDetailsForm.reset();
      setTimeout(() => this.formGroupDirective.resetForm(), 0);
    }, 0);
  }


  setFormControls = () => {
    this.userDetailsForm = this.fb.group({
      companyname: [this.leadsModel.companyname, Validators.required],
      representativename: [this.leadsModel.representativename, [Validators.required]],
      representativephone: [this.leadsModel.representativephone, [Validators.required]],
      companyphone: [this.leadsModel.companyphone, [Validators.required, Validators.compose([Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])]],
    });

  }


  invalidateForm = () => {
    Object.keys(this.userDetailsForm.controls).forEach(field => {
      const control = this.userDetailsForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  isControlValid( controlName: string): boolean {
    const control = this.userDetailsForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.userDetailsForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.userDetailsForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

}
