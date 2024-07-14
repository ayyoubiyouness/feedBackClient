import { databases } from "./Config";
import { ID } from "appwrite";

const db = {};

const collections = [
    {
        dbId: "6656dd3c003a67a08bc4",
        id: "6656ef6f000f6664e172",
        name: "Bug",
    },
];

collections.forEach((col) => {
    db[col.name] = {
        create: (payload, permissions, id = ID.unique()) =>
            databases.createDocument(
                col.dbId,
                col.id,
                id,
                payload,
                permissions
            ),
        update: (id, payload, permissions) =>
            databases.updateDocument(
                col.dbId,
                col.id,
                id,
                payload,
                permissions
            ),
        delete: (id) => databases.deleteDocument(col.dbId, col.id, id),

        list: (queries = []) =>
            databases.listDocuments(col.dbId, col.id, queries),

        get: (id) => databases.getDocument(col.dbId, col.id, id),
    };
});

export default db;