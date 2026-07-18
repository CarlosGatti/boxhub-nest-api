import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyResourceUpdateManyMutationInput } from './defined-academy-resource-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyResourceArgs {

    @Field(() => DefinedAcademyResourceUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyResourceUpdateManyMutationInput)
    data!: DefinedAcademyResourceUpdateManyMutationInput;

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    where?: DefinedAcademyResourceWhereInput;
}
