import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'admission.component.html',
  styleUrls: ['admission.component.scss'],
})
export class AdmissionComponent implements OnInit {
  public form: FormGroup;
  public formSubmited: boolean = false;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      cpf: ['', [Validators.required, Validators.minLength(11)]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) this.formSubmited = true;
  }
}
