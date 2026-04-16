import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProjectUpdateManyMutationInput } from './defined-project-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedProjectWhereInput } from './defined-project-where.input';

@ArgsType()
export class UpdateManyDefinedProjectArgs {

    @Field(() => DefinedProjectUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedProjectUpdateManyMutationInput)
    data!: DefinedProjectUpdateManyMutationInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;
}
