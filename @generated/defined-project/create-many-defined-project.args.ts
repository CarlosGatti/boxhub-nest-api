import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProjectCreateManyInput } from './defined-project-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedProjectArgs {

    @Field(() => [DefinedProjectCreateManyInput], {nullable:false})
    @Type(() => DefinedProjectCreateManyInput)
    data!: Array<DefinedProjectCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
