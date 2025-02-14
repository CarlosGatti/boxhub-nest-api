import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FollowsWhereInput } from './follows-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFollowsArgs {

    @Field(() => FollowsWhereInput, {nullable:true})
    @Type(() => FollowsWhereInput)
    where?: FollowsWhereInput;
}
