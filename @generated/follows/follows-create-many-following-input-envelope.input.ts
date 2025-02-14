import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowsCreateManyFollowingInput } from './follows-create-many-following.input';
import { Type } from 'class-transformer';

@InputType()
export class FollowsCreateManyFollowingInputEnvelope {

    @Field(() => [FollowsCreateManyFollowingInput], {nullable:false})
    @Type(() => FollowsCreateManyFollowingInput)
    data!: Array<FollowsCreateManyFollowingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
