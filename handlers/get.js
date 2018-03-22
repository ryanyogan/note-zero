import * as db from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

export const main = async (event, context, callback) => {
  const params = {
    TableName: 'notes',
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id
    }
  };

  try {
    const result = await db.call('get', params);
    if (result.Item) {
      callback(null, success(result.Item));
    } else {
      callback(null, failure({ status: false, error: 'Item not found.' }));
    }
  } catch (error) {
    callback(null, failure({ status: false }));
  }
};
