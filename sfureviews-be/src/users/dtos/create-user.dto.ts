import { IsBoolean, IsDateString, IsEmail, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    readonly email: string;
    @IsEmail()
    readonly sfuEmail: string;
    @IsString()
    readonly firstName: string;
    @IsOptional()
    @IsString()
    readonly lastName?: string;
    @IsOptional() 
    readonly pronouns: string;
    @IsOptional()
    readonly phone?: string;
    @IsDateString()
    readonly dateRegistered?: string;
    @IsBoolean()
    readonly isActive?: boolean;
}