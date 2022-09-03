import { ObjectType, Field, ID, Int, Resolver, Query, Mutation, Arg } from 'type-graphql';
import "reflect-metadata";
@ObjectType() // type User { ...
export class User {
  @Field(type => ID) // id: ID!
  id!: string

  @Field(type => String) // name: String!
  firstName!: string

  @Field(type => String) // name: String!
  middleName!: string

  @Field(type => String) // name: String!
  lastName!: string

  @Field(type => String) // name: String!
  phoneNumber!: string

  @Field(type => String) // name: String!
  email!: string

  @Field(type => String) // name: String!
  passward!: string

  @Field(type => String) // name: String!
  profileImage!: string

  @Field(type => String) // name: String!
  aboutMe!: string

  @Field(type => Int, { nullable: true }) // point: Int
  rating?: number
}

@Resolver(User) // User 클래스에 대한 리졸버이다.
export class UserResolver {
  @Query(returns => User, { nullable: true }) // 쿼리에 대한 상세 구현이다.
  async get_user(
    @Arg('id', type => String) id: string
  ): Promise<User|void>{
    // db에 접속해서 유저 정보 반환...
  }

  @Mutation(returns => User) // 뮤테이션에 대한 상세 구현이다.
  async add_user(
    @Arg('id', type => String) id: string,
    @Arg('name', type => String) name: string,
    @Arg('point', type => Int, { nullable: true }) point?: number
  ): Promise<User|void> {
    // db에 접속해서 유저 추가
  }
}