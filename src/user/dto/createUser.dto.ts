import { Field, InputType } from '@nestjs/graphql';

export interface CreateUserWithoutPasswordInterface {
  firstName: string;
  lastName: string;
  email: string;
}

@InputType()
export class CreateUserWithoutPassword {
  @Field(() => String, { nullable: false })
  firstName: string;

  @Field(() => String, { nullable: false })
  lastName: string;

  @Field(() => String, { nullable: true })
  email: string;

  // @Field(() => String, { nullable: true })
  // cpf: string;
  @Field({ defaultValue: false })
  emailVerified?: boolean;
}
