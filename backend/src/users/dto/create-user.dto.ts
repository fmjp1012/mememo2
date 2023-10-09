import { IsString, Max, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly password: string;
}