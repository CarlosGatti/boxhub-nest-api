import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FollowsCreateManyInput } from './follows-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFollowsArgs {

    @Field(() => [FollowsCreateManyInput], {nullable:false})
    @Type(() => FollowsCreateManyInput)
    data!: Array<FollowsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
