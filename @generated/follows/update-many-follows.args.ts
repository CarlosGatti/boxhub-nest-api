import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FollowsUpdateManyMutationInput } from './follows-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FollowsWhereInput } from './follows-where.input';

@ArgsType()
export class UpdateManyFollowsArgs {

    @Field(() => FollowsUpdateManyMutationInput, {nullable:false})
    @Type(() => FollowsUpdateManyMutationInput)
    data!: FollowsUpdateManyMutationInput;

    @Field(() => FollowsWhereInput, {nullable:true})
    @Type(() => FollowsWhereInput)
    where?: FollowsWhereInput;
}
