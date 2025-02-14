import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FamilyUpdateManyMutationInput } from './family-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FamilyWhereInput } from './family-where.input';

@ArgsType()
export class UpdateManyFamilyArgs {

    @Field(() => FamilyUpdateManyMutationInput, {nullable:false})
    @Type(() => FamilyUpdateManyMutationInput)
    data!: FamilyUpdateManyMutationInput;

    @Field(() => FamilyWhereInput, {nullable:true})
    @Type(() => FamilyWhereInput)
    where?: FamilyWhereInput;
}
