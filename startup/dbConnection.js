require('dotenv').config();
const { MongoClient } = require('mongodb');


async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://rahul012arora:thzCDyr1ihlKcejq@tcap.cgyuo.mongodb.net/?retryWrites=true&w=majority&appName=TCAP";
    // const uri = process.env.TCAPMONGOURL
    // console.log('process is ',process.env)
    console.log('uri is ',uri)
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        // await  listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);