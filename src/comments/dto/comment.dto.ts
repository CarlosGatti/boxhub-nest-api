import { Field, ObjectType, Int } from '@nestjs/graphql';
import { User } from '../../../@generated/user/user.model';

@ObjectType()
export class Comment {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  content!: string;

  @Field(() => Int)
  discartItemId!: number;

  @Field(() => Int)
  userId!: number;

  @Field(() => Int, { nullable: true })
  parentId?: number;

  @Field(() => User)
  user!: User;

  @Field(() => [Comment], { nullable: true })
  replies?: Comment[];

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}

