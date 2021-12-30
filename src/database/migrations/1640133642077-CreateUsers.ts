import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1640133642077 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "sex",
                        type: "varchar"
                    },
                    {
                        name: "profession",
                        type: "varchar"
                    },
                    {
                        name: "about_me",
                        type: "varchar"
                    },
                    {
                        name: "photo",
                        type: "varchar"
                    },
                    {
                        name: "phone",
                        type: "numeric"
                    },
                    {
                        name: "birth_date",
                        type: "timestap",
                        default: "now()",
                    },
                    {
                        name: "created_at",
                        type: "timestap",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestap",
                        default: "now()",
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
