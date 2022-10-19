import { Field, InputType, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import Grade from "./Grade";

@Entity()
@ObjectType()
@Unique(["name"])
class Skill {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Grade, (grade) => grade.skill)
  grades: Grade[];
}

@InputType()
export class SkillInput {
  @Field()
  name: string;
}

export default Skill;
