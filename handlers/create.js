import uuid from 'uuid';
import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });
const db = new AWS.DynamoDB.DocumentClient();

export const main = (event, context, callback) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: 'notes',
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: new Date().getTime()
    }
  };

  db.put(params, error => {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    };

    if (error) {
      const response = {
        statusCode: 500,
        headers,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
      return;
    }

    const response = {
      statusCode: 200,
      headers,
      body: JSON.stringify(params.Item)
    };
    callback(null, response);
  });
};
