import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/DatabaseStore/database.service';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  private PASSWORD_SALT: number;
  constructor(private readonly database: DatabaseService , private readonly jwtService: JwtService) {
    this.PASSWORD_SALT = parseInt(process.env.PASSWORD_SALT ?? '10');
  }

  async signup(signInDto: SignUpDto) {
    const { email, password, name } = signInDto;
    const existingUser = await this.database.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new BadRequestException(
        'An account with this email address already exists.',
      );
    }
    const hashedPassword = await bcrypt.hash(password, this.PASSWORD_SALT);
    const newUser = await this.database.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
    return {
      message: 'Account created successfully.',
      user: newUser,
    };
  }

  async signin(signin:SignInDto) {
    const { email, password } = signin;
    const user = await this.database.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new BadRequestException('Invalid email or password.');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid email or password.');
    }
    // Here you would typically generate a JWT token or session
    const token = this.jwtService.sign({ userId: user.id, email: user.email } , {expiresIn: '7h'});
    
    return {message:"signin" , token}
  }

  async signOut() {
    
  }
}
