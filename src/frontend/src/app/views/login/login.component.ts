import { Component, OnInit } from '@angular/core';
import { RequestLogin } from '../../resources/models/requestLogin';
import { LoginService } from '../../resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  //variáveis
  instituicao = "IBNP";

  //para dinâmica de cor em "Esqueci minha senha"
  isHovered: boolean = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  //fazer uso da classe requestLogin
  public requestLogin: RequestLogin = new RequestLogin;

  constructor(private loginService: LoginService){   }

  ngOnInit(): void {
   this.requestLogin = new RequestLogin(); 
  }

  public doLogin() {
    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) =>{
        console.log(data)
      },
      (error) =>{
        console.log(error)
      }   
    );
  }


}
