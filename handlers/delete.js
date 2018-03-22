import * as db from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

export const main = async (event, context, callback) => {
  const params = {
    TableName: 'notes',
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id,
    },
  };

  try {
    await db.call('delete', params);
    callback(null, success({ status: true }));
  } catch (error) {
    callback(null, failure({ status: false }));
  }
};
