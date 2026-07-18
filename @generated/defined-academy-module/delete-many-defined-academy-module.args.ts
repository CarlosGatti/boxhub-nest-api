import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyModuleWhereInput } from './defined-academy-module-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedAcademyModuleArgs {

    @Field(() => DefinedAcademyModuleWhereInput, {nullable:true})
    @Type(() => DefinedAcademyModuleWhereInput)
    where?: DefinedAcademyModuleWhereInput;
}
