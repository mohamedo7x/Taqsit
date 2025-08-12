import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {  SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';
import { RateLimit } from './decorator/rate-limit.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(201)
  @Post('signup')
  async signup(@Body() signInDto: SignUpDto) {
    return this.authService.signup(signInDto);
  }

  @HttpCode(200)
  @Post('signin')
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signin(signInDto);
  }

  @Post('signout')
  @RateLimit(5)
  async signOut(@Body('token') refreshToekn: string):Promise<{sucess:true}> {
    await this.authService.signOut(refreshToekn);
    return {sucess : true}
  }
}
