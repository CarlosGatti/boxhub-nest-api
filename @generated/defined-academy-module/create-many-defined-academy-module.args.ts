import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyModuleCreateManyInput } from './defined-academy-module-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyModuleArgs {

    @Field(() => [DefinedAcademyModuleCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyModuleCreateManyInput)
    data!: Array<DefinedAcademyModuleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
