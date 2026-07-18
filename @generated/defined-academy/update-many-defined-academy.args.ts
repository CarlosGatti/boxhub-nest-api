import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUpdateManyMutationInput } from './defined-academy-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyArgs {

    @Field(() => DefinedAcademyUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateManyMutationInput)
    data!: DefinedAcademyUpdateManyMutationInput;

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;
}
