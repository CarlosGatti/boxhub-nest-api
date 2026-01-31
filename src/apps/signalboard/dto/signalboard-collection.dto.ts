import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SignalboardCollection {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  icon?: string;

  @Field({ nullable: true })
  color?: string;

  @Field(() => [String])
  keywords: string[];

  @Field(() => [String])
  blocked: string[];

  @Field(() => [String])
  preferredDomains: string[];

  @Field()
  isActive: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => Int)
  sourcesCount: number;

  @Field(() => Int)
  unreadCount: number;
}
