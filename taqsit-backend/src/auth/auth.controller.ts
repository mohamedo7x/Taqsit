import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {  SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() signInDto: SignUpDto) {
    return this.authService.signup(signInDto);
  }

  @Post('signin')
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signin(signInDto);
  }

  @Post('signOut')
  async signOut() {
    return this.authService.signOut();
  }
}
