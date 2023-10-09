import { IsString, Max, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  readonly name: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly password: string;
}