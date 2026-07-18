import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyModuleUpdateManyMutationInput } from './defined-academy-module-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleWhereInput } from './defined-academy-module-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyModuleArgs {

    @Field(() => DefinedAcademyModuleUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyModuleUpdateManyMutationInput)
    data!: DefinedAcademyModuleUpdateManyMutationInput;

    @Field(() => DefinedAcademyModuleWhereInput, {nullable:true})
    @Type(() => DefinedAcademyModuleWhereInput)
    where?: DefinedAcademyModuleWhereInput;
}
