import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loginForm;
  datalogin;
  datalists;
  datas = [{
    "status": 1,
    "message": "Sukses",
    "data": {
      "system_message": "SUCCESS",
      "response": {
        "additionaldata": [],
        "billdetails": [
          {
            "adminfee": "0.0",
            "billid": "8",
            "currency": "360",
            "title": "TELKOMSEL 50rb - 50.149",
            "totalamount": "50149.00",
            "descriptions": null,
            "body": [
              {"DENOM": 50000}
            ]
          },
          {
            "adminfee": "0.0",
            "billid": "9",
            "currency": "360",
            "title": "TELKOMSEL 75rb - 74.050",
            "totalamount": "74050.00",
            "descriptions": null,
            "body": [
              {"DENOM": 75000}
            ]
          },
          {
            "adminfee": "0.0",
            "billid": "10",
            "currency": "360",
            "title": "TELKOMSEL 100rb - 98.264",
            "totalamount": "98264.00",
            "descriptions": null,
            "body": [
              {"DENOM": 100000}
            ]
          },
          {
            "adminfee": "0.0",
            "billid": "11",
            "currency": "360",
            "title": "TELKOMSEL 150rb - 146.600",
            "totalamount": "146600.00",
            "descriptions": null,
            "body": [
              {"DENOM": 150000}
            ]
          },
          {
            "adminfee": "0.0",
            "billid": "12",
            "currency": "360",
            "title": "TELKOMSEL 200rb - 194.900",
            "totalamount": "194900.00",
            "descriptions": null,
            "body": [
              {"DENOM": 200000}
            ]
          },
          {
            "adminfee": "0.0",
            "billid": "13",
            "currency": "360",
            "title": "TELKOMSEL 300rb - 292.200",
            "totalamount": "292200.00",
            "descriptions": null,
            "body": [
              {"DENOM": 300000}
            ]
          },
          {
            "adminfee": "0.0",
            "billid": "14",
            "currency": "360",
            "title": "TELKOMSEL 500rb - 487.200",
            "totalamount": "487200.00",
            "descriptions": null,
            "body": [
              {"DENOM": 500000}
            ]
          },
          {
            "adminfee": "0.0",
            "billid": "15",
            "currency": "360",
            "title": "TELKOMSEL 1jt - 970.200",
            "totalamount": "970200.00",
            "descriptions": null,
            "body": [
              {"DENOM": 1000000}
            ]
          }
        ],
        "billername": "PULSA TSEL",
        "inquiryid": "27190993",
        "paymenttype": "CLOSE_PAYMENT",
        "responsecode": "0000",
        "responsemsg": "SUCCESS",
        "subscriberid": "081311529594",
        "subscribername": ""
      },
      "trace": {
        "session_id": "81215AEFADFB710C1258F79ABA1AD710.node3",
        "request_date_time": "20190704185319",
        "words": "779b7f8280415b568cdfd0abcc20eb8c3e18b585",
        "biller_id": "9900002",
        "account_number": "081311529594",
        "systrace": 1564026434,
        "inquiry_id": "27190993"
      }
    }
  }]

  constructor(private formBuilder: FormBuilder, private service:DataService){
    this.loginForm = this.formBuilder.group({
      email: '',
      pass: ''
    });
  }

  onSubmit() {
    let email = this.loginForm.get('email').value,
        pass = this.loginForm.get('pass').value,
        datakirim = [{'email':email}, {'password':pass}];
    
    if(email !== "" && pass !== ""){
      this.service.login(datakirim).subscribe(result => {
        if(result){
          console.log("Login Sukses");
          this.datalogin = result;
        }else{
          console.log("Email tidak terdaftar");
        }
      })
    }else{
      console.log("Harap isi Email dan Password !");
    }
  }

  ngOnInit() {
    this.service.getdata().subscribe(result => {
      this.datalists = result.data.data;
    })
  }

}
