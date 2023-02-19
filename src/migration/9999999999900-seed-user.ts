import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { UserSeed } from "../seed/user.seed";
import { hash } from "bcrypt";
import { Users } from "../entity/users.entitiy";

export class seedUser9644319170796 implements MigrationInterface {
  name = "seedUser9644319170796";

  public async up(queryRunner: QueryRunner): Promise<any> {
    const userRepository = getRepository<Users>("users");

    const userSeed = userRepository.create(UserSeed);
    userSeed.password = await hash(userSeed.password, 10);
    await userRepository.save(userSeed);
  }

  public async down(_: QueryRunner): Promise<any> {}
}
