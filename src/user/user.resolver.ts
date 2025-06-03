import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { CurrentUser } from "./current-user.decorator";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { MeDto } from "./dto/me.dto";
import { UseGuards } from "@nestjs/common";
import { User } from "../../@generated/user/user.model";
import { UserService } from "./user.service";
import { UserUpdateInput } from "../../@generated/user/user-update.input";
import { SearchDto } from "./dto/search.dto";
import { PaginationArgs } from "../shared/types/pagination.input";
import { UserCreateInput } from "../../@generated/user/user-create.input";
import { CreateUserWithoutPassword } from "./dto/createUser.dto";
import { BaseResult } from "../models/base-error.dto";
import { ProGuard } from "src/auth/guards/pro.guard";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

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
  createUser(@Args("data") data: UserCreateInput) {
    return this.userService.createUser(data);
  }

  @Mutation(() => User, { name: "updateUser" })
  @UseGuards(JwtAuthGuard, ProGuard)
  updateUser(
    @CurrentUser() currentUser: User,
    @Args("data") data: UserUpdateInput
  ) {
    return this.userService.updateUser(currentUser, data);
  }

  @Query(() => SearchDto, { nullable: true })
  @UseGuards(JwtAuthGuard)
  search(
    @CurrentUser() currentUser: User,
    @Args("term", { nullable: true }) term?: string,
    @Args("userId", { nullable: true }) userId?: number,
    @Args("pagination", { nullable: true }) pagination?: PaginationArgs
  ) {
    return this.userService.search(currentUser, pagination, term, userId);
  }

  @Mutation(() => Boolean, { name: "followUser" })
  @UseGuards(JwtAuthGuard)
  followUser(@Args("userId") userId: number, @CurrentUser() currentUser: User) {
    return this.userService.followUser(userId, currentUser.id);
  }

  @Mutation(() => Boolean, { name: "unfollowUser" })
  @UseGuards(JwtAuthGuard)
  unfollowUser(
    @Args("userId") userId: number,
    @CurrentUser() currentUser: User
  ) {
    return this.userService.unfollowUser(userId, currentUser.id);
  }

  @Query(() => [User], { name: "suggestedUsers" })
  @UseGuards(JwtAuthGuard)
  suggestedUsers(@CurrentUser() currentUser: User) {
    return this.userService.suggestedUsers(currentUser);
  }

  @Mutation(() => BaseResult, { name: "createUserWithoutPassword" })
  createUserWithoutPassword(@Args("data") data: CreateUserWithoutPassword) {
    return this.userService.createUserWithoutPassword(data);
  }
}
