import * as db from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

export const main = async (event, context, callback) => {
  const params = {
    TableName: 'notes',
    KeyConditionExpression: 'userId = :userId',
    ExpressionAttributeValues: {
      ':userId': event.requestContext.identity.cognitoIdentityId,
    },
  };

  try {
    const result = await db.call('query', params);
    callback(null, success(result.Items));
  } catch (error) {
    callback(null, failure({ status: false }));
  }
};
