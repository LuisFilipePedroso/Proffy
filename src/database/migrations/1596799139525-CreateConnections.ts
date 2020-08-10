import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateConnections1596799139525 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
              name: 'connections',
              columns: [
                  {
                      name: 'id',
                      type: 'uuid',
                      isPrimary: true,
                      generationStrategy: 'uuid',
                      default: 'uuid_generate_v4()',
                  },
                  {
                      name: 'user_id',
                      type: 'uuid',
                  },
                  {
                      name: 'created_at',
                      type: 'timestamp',
                      default: 'now()',
                  },
                  {
                      name: 'updated_at',
                      type: 'timestamp',
                      default: 'now()',
                  },
              ],
              foreignKeys: [
                  {
                      name: 'UserConnection',
                      referencedTableName: 'users',
                      referencedColumnNames: ['id'],
                      columnNames: ['user_id'],
                      onDelete: 'CASCADE',
                      onUpdate: 'CASCADE',
                  }
              ]
          }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('connections');
    }

}
