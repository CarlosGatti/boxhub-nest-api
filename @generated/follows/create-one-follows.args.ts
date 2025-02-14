import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FollowsCreateInput } from './follows-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFollowsArgs {

    @Field(() => FollowsCreateInput, {nullable:false})
    @Type(() => FollowsCreateInput)
    data!: FollowsCreateInput;
}
