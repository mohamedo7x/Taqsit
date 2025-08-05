import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class SignUpDto {
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;

  @IsNotEmpty({ message: 'Name cannot be empty' })
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  @IsString({ message: 'Name must be a string' })
  name: string;
}
