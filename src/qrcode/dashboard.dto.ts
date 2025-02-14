import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RecentContainer {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}

@ObjectType()
export class DashboardData {
  @Field(() => Int)
  totalContainers: number;

  @Field(() => Int)
  totalItems: number;

  @Field(() => [RecentContainer])
  recentContainers: RecentContainer[];
}
