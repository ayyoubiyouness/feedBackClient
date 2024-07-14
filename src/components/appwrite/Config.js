import { Client, Databases } from "appwrite";

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("661fd4032a665e37b928");

const databases = new Databases(client);

export { client, databases };