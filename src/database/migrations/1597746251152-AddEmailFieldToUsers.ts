import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export default class AddEmailFieldToUsers1597746251152 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
          'users',
          new TableColumn({
              name: 'email',
              type: 'varchar',
              isUnique: true,
              isNullable: false,
          })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'email');
    }

}
