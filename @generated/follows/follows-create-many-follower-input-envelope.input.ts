import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowsCreateManyFollowerInput } from './follows-create-many-follower.input';
import { Type } from 'class-transformer';

@InputType()
export class FollowsCreateManyFollowerInputEnvelope {

    @Field(() => [FollowsCreateManyFollowerInput], {nullable:false})
    @Type(() => FollowsCreateManyFollowerInput)
    data!: Array<FollowsCreateManyFollowerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
