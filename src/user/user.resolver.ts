import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { CurrentUser } from "./current-user.decorator";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { MeDto } from "./dto/me.dto";
import { UseGuards } from "@nestjs/common";
import { User } from "../../@generated/user/user.model";
import { UserService } from "./user.service";
import { UserUpdateInput } from "../../@generated/user/user-update.input";
import { PaginationArgs } from "../shared/types/pagination.input";
import { UserCreateInput } from "../../@generated/user/user-create.input";
import { CreateUserWithoutPassword } from "./dto/createUser.dto";
import { BaseResult } from "../models/base-error.dto";
import { ProGuard } from "src/auth/guards/pro.guard";
import { AdminGuard } from "src/auth/guards/admin.guard";
import { MailService } from "src/services/providers/mail/mail.service";
import { RegisterUserInput, LoginResult } from "./dto/user.dto";
import { AuthService } from "../auth/auth.service";
@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly mailService: MailService,
    private readonly authService: AuthService
  ) {}

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  users() {
    return this.userService.users();
  }

  @Query(() => MeDto, { name: "me" })
  @UseGuards(JwtAuthGuard)
  me(@CurrentUser() currentUser: User) {
    return this.userService.me(currentUser);
  }

  @Query(() => Boolean, { name: "emailAvailable" })
  async isEmailAvailable(@Args("email") email: string): Promise<boolean> {
    const user = await this.userService.user({
      where: { email },
    });

    return !user; 
  }

  @Mutation(() => User, { name: "createUser" })
  async createUser(@Args("data") data: UserCreateInput) {
    console.log("📝 Creating user with email:", data.email);
    try {
      const user = await this.userService.createUser(data);
      console.log("✅ User created successfully:", user.id);
      return user;
    } catch (error) {
      console.error("❌ Error creating user:", error);
      throw error;
    }
  }

  @Mutation(() => User, { name: "updateUser" })
  @UseGuards(JwtAuthGuard, ProGuard)
  updateUser(
    @CurrentUser() currentUser: User,
    @Args("data") data: UserUpdateInput
  ) {
    return this.userService.updateUser(currentUser, data);
  }

  @Mutation(() => BaseResult, { name: "createUserWithoutPassword" })
  createUserWithoutPassword(@Args("data") data: CreateUserWithoutPassword) {
    return this.userService.createUserWithoutPassword(data);
  }

  @Mutation(() => LoginResult, { name: "register" })
  async register(@Args("user") userInput: RegisterUserInput): Promise<LoginResult> {
    console.log("📝 Registering user with email:", userInput.email);
    try {
      // Convert RegisterUserInput to UserCreateInput
      const userCreateData: UserCreateInput = {
        email: userInput.email,
        password: userInput.password,
        firstName: userInput.firstName,
        lastName: userInput.lastName,
        public: userInput.public ?? false,
        apartment: userInput.apartment,
      };

      // Create the user
      const user = await this.userService.createUser(userCreateData);
      console.log("✅ User registered successfully:", user.id);

      // Generate JWT token
      const token = this.authService.createJwt(user).token;

      // Return LoginResult with user and token
      return {
        user,
        token,
      };
    } catch (error) {
      console.error("❌ Error registering user:", error);
      throw error;
    }
  }


    
@Mutation(() => BaseResult)
async sendEmail(
  @Args('to') to: string,
  @Args('subject') subject: string,
  @Args('message') message: string,
  @Args('name') name: string,
  @Args('email') email: string,
): Promise<BaseResult> {  
  try {
    await this.mailService.send({
      to,
      subject,
      variables: {
        name,
        email,
        message,
        year: new Date().getFullYear(),
      },
      path: 'contact_us',
    });
    return { success: true, message: 'Email enviado com sucesso.' };
  } catch (error) {
    return { success: false, message: 'Erro ao enviar email.' };
  }
}

  @Query(() => [User], { name: "pendingResidents" })
  @UseGuards(JwtAuthGuard, AdminGuard)
  getPendingResidents() {
    return this.userService.getPendingResidents();
  }

  @Mutation(() => BaseResult, { name: "approveResident" })
  @UseGuards(JwtAuthGuard, AdminGuard)
  approveResident(
    @Args('userId', { type: () => Number }) userId: number
  ) {
    return this.userService.approveResident(userId);
  }

  @Mutation(() => BaseResult, { name: "rejectResident" })
  @UseGuards(JwtAuthGuard, AdminGuard)
  rejectResident(
    @Args('userId', { type: () => Number }) userId: number,
    @Args('reason', { nullable: true, type: () => String }) reason?: string
  ) {
    return this.userService.rejectResident(userId, reason);
}

}
